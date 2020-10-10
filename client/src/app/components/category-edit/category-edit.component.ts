import { Component, OnInit } from '@angular/core';
import { Category } from 'app/models/category';
import { User } from 'app/models/user';
import { CategoryService } from 'app/services/category.service';
import { UserService } from 'app/services/user.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';


@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css'],
  providers: [CategoryService,UserService]

})
export class CategoryEditComponent implements OnInit {
  public titulo: string;
  public category: Category;
  public user: User;
  public identity;
  public token;
  public alertMessage;
  public url:string;
  public is_edit;


  constructor(
    private _categoryService: CategoryService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Actualizar Categoría';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;
    this.category = new Category('','','','','');
    this.is_edit = true;
   }

  ngOnInit() {
    console.log('category-edit.component.ts cargado');
    this.getCategory();
  }
  getCategory(){
    this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._categoryService.getCategory(this.token, id).subscribe(
                response => {
                        if(!response.category){
                            this._router.navigate(['/']);
                        }else{
                            this.category = response.category;
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
  onSubmit(){
    console.log(this.category);
    this._route.params.forEach((params: Params) => {
        let id = params['id'];

            this._categoryService.editCategory(this.token,id , this.category).subscribe(
                response => {
                    this.category = response.category;

                    if(!response.category){
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
