import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { User } from 'app/models/user';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  providers: [UserService,CategoryService],
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {
          public titulo: string;
          public category: Category;
          public identity;
          public token;
          public url: string;
          public alertMessage;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _categoryService: CategoryService
  ) {
    this.titulo = 'Nueva Categoría';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.category = new Category('','','','','');
   }

  ngOnInit() {
    console.log('new-category.components.ts cargado');
  }

  onSubmit(){
    console.log(this.category);
    this._categoryService.addCategory(this.token, this.category).subscribe(
      response => {
          if(!response.category){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'La categoría se ha creado exitosamente!';
            this.category = response.category;
            //this._router.navigate(['/category-edit'], response.category._id);
          }

      },
      error => {
          var errorMessage = <any>error;
      if(errorMessage !=null){
        var body = JSON.parse(error._body);
        this.alertMessage = body.message;

        console.log(error);
      }    
      }
    )
  }

}
