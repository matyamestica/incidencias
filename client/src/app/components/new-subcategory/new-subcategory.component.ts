import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { SubcategoryService } from '../../services/subcategory.service';
import { Subcategory } from '../../models/subcategory';
import { User } from 'app/models/user';


@Component({
  selector: 'app-new-subcategory',
  templateUrl: './new-subcategory.component.html',
  providers: [UserService,SubcategoryService,CategoryService],
  styleUrls: ['./new-subcategory.component.css']
})
export class NewSubcategoryComponent implements OnInit {
  public titulo: string;
  public subcategory: Subcategory;
  public categories: Category[];
  public identity;
  public token;
  public url: string;
  public alertMessage;
  public next_page;
  public prev_page;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _subcategoryService: SubcategoryService,
    private _categoryService: CategoryService
  ) {
    this.titulo = 'Nueva Subcategoría';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.subcategory = new Subcategory('','','','');
    this.next_page = 1;
    this.prev_page = 1;
   }

  ngOnInit() {
    console.log('new-subcategory.component.ts cargado');
    this.getCategories();
  }

  onSubmit(){
    console.log(this.subcategory);
    this._subcategoryService.addSubcategory(this.token, this.subcategory).subscribe(
      response => {

        if(!response.subcategory){
          this.alertMessage = 'Error en el servidor';
        }else{
          this.alertMessage = 'La subcategoría se ha creado correctamente';
          this.subcategory = response.subcategory;
        }
      },
      error => {
          var errorMessage = <any>error;

          if(errorMessage != null){
            var body = JSON.parse(error._body);
            this.alertMessage = body.message;

            console.log(error);
          }
      }
    );
  }







      getCategories(){
        this._route.params.forEach((params: Params) => {
          let page = +params['page'];
          if(!page){
            page = 1;
          }else{
            this.next_page = page + 1;
            this.prev_page = page - 1;

            if(this.prev_page == 0){
              this.prev_page = 1;
            }
          }

          this._categoryService.getCategories(this.token, page).subscribe(
            response => {
              if(!response.categories){
                this._router.navigate(['/']);
              }else{
                this.categories = response.categories;
              }
            },
            error => {
              var errorMessage = <any>error;

              if(errorMessage != null){
                var body = JSON.parse(error._body);
                //this.alertMessage = body.message;

                console.log(error);
              }
            }
          )
        });
      }


}









