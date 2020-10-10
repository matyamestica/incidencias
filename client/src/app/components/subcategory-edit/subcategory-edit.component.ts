import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/category';
import { Subcategory } from '../../models/subcategory';
import { User } from 'app/models/user';
import { CategoryService } from 'app/services/category.service';
import { SubcategoryService } from 'app/services/subcategory.service';
import { UserService } from 'app/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-subcategory-edit',
  templateUrl: './subcategory-edit.component.html',
  styleUrls: ['./subcategory-edit.component.css'],
  providers: [CategoryService,UserService,SubcategoryService]

})
export class SubcategoryEditComponent implements OnInit {
  public titulo: string;
  public category: Category;
  public subcategory: Subcategory;
  public categories: Category[];
  public user: User;
  public identity;
  public token;
  public alertMessage;
  public url:string;
  public is_edit;
  public next_page;
  public prev_page;


  constructor(
    private _categoryService: CategoryService,
    private _subcategoryService: SubcategoryService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Actualizar Subcategoría';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;
    this.subcategory = new Subcategory('','','','',);
    this.is_edit = true;
    this.next_page = 1;
    this.prev_page = 1;
   }

  ngOnInit() {
    console.log('subcategory-edit.component.ts cargado');
    this.getCategories();
    this.getSubcategory();
  }

  getSubcategory(){
    this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._subcategoryService.getSubcategory(this.token, id).subscribe(
                response => {
                        if(!response.subcategory){
                            this._router.navigate(['/']);
                        }else{
                            this.subcategory = response.subcategory;
                        }
                },
                error => {
                var errorMessage = <any>error;

                if(errorMessage != null){
                var body = JSON.parse(error._body);
                //this.errorMessage = body.message;
                console.log(error);
                }
            }
            );
    });
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
  onSubmit(){
    console.log(this.subcategory);
    this._route.params.forEach((params: Params) => {
        let id = params['id'];

            this._subcategoryService.editSubcategory(this.token,id , this.subcategory).subscribe(
                response => {
                    this.subcategory = response.subcategory;

                    if(!response.subcategory){
                        this.alertMessage = 'Error en el servidor';
                    }else{
                        this.alertMessage = 'El Ramo se ha actualizado correctamente';
                        }
                },
                error => {
                var errorMessage = <any>error;

                if(errorMessage != null){
                var body = JSON.parse(error._body);
                //this.errorMessage = body.message;
                console.log(error);
                }
            }
        );
    });
  }

}
