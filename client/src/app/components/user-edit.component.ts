import { User } from './../models/user';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-edit',
  templateUrl: './../views/user-edit.html',
  providers: [UserService]
})

export class UserEditComponent implements OnInit{
  public titulo: string;
  public user: User;
  public identity;
  public token;

  constructor(
    private _userService: UserService
  ){
    this.titulo = 'Actualizar mis datos';
    this.user = new User('','','','','','','','ROLE_USER','','','');

    //Local Storage
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
  }


  ngOnInit(){
    console.log('user-.component.ts cargado');
  }
  onSubmit(){
    console.log(this.user);
  }
}
