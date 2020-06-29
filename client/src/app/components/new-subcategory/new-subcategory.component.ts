import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { Subcategory } from '../../models/subcategory';
import { User } from 'app/models/user';
import { SubcategoryService } from 'app/services/subcategory.service';

@Component({
  selector: 'app-new-subcategory',
  templateUrl: './new-subcategory.component.html',
  providers: [UserService,SubcategoryService],
  styleUrls: ['./new-subcategory.component.css']
})
export class NewSubcategoryComponent implements OnInit {
  public titulo: string;
  public subcategory: Subcategory;
  public identity;
  public token;
  public url: string;
  public alertMessage;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _subcategoryService: SubcategoryService
  ) {
    this.titulo = 'Nueva Subcategoría';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.subcategory = new Subcategory('','','','','','');
   }

  ngOnInit() {
    console.log('new-subcategory.component.ts cargado');
  }

  onSubmit(){
    console.log(this.subcategory);
    this._subcategoryService.addSubcategory(this.token, this.subcategory).subscribe(
      response => {
          if(!response.subcategory){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'La subcategoría se ha creado exitosamente!';
            this.subcategory = response.subcategory;
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
