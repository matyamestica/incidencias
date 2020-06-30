import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { SubcategoryService } from '../../services/subcategory.service';
import { Subcategory } from '../../models/subcategory';

@Component({
  selector: 'app-subcategories-list',
  templateUrl: './subcategories-list.component.html',
  providers: [UserService,SubcategoryService],
  styleUrls: ['./subcategories-list.component.css']
})
export class SubcategoriesListComponent implements OnInit {
        public titulo: string;
        public subcategories: Subcategory[];
        public identity;
        public token;
        public url: string;
        public next_page;
        public prev_page;

  constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _subcategoryService: SubcategoryService


      ){
        this.titulo = 'Subcategorías';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.next_page = 1;
        this.prev_page = 1;
      }
  ngOnInit() {
    console.log('subcategories-list.component.ts cargado');

    //Conseguir el listado de Categorías
    this.getSubcategories();
  }

  getSubcategories(){
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

      this._subcategoryService.getSubcategories(this.token, page).subscribe(
        response => {
          if(!response.subcategories){
            this._router.navigate(['/']);
          }else{
            this.subcategories = response.subcategories;
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
