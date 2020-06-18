import { UserService } from './services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from './models/user';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService]
})
export class AppComponent  implements OnInit{
  public title = 'INCIDENCIAS EICI';
  public user: User;
  public user_register: User;
  public identity;
  public token;
  public errorMessage;

  constructor(
    private _userService: UserService
  ){
    this.user = new User('','','','','','','','ROLE_USER','','');
    this.user_register = new User('','','','','','','','ROLE_USER','','');
  }

  ngOnInit(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();

    console.log(this.identity);
    console.log(this.token)
  }


  public onSubmit(){
    console.log(this.user);

    //conseguir datos del usuario identificado
    this._userService.signup(this.user).subscribe(
      response => {
        let identity = response.user;
        this.identity = identity;

        if(!this.identity._id){
          alert("El usuario no se ha registrado correctamente");
        }else{
          //crear elemento en el local storage para tener al usuario en sesion
          localStorage.setItem('identity', JSON.stringify(identity));
          //conseguir tokken para enviarselo a cada peticion http

          this._userService.signup(this.user, 'true').subscribe(
            response => {
              let token = response.token;
              this.token = token;

              if(this.token.length <= 0){
                alert("El token no se ha generado");
              }else{
                  //crear elemento en el localstorage para tener token disponible
                  localStorage.setItem('token', token);
                  console.log(token);
                  console.log(identity);
              }
            },
            error => {
              var errorMessage = <any>error;

              if(errorMessage != null){
                var body = JSON.parse(error._body);
                this.errorMessage = body.message;
                console.log(error);
              }
            }
          );




        }
      },
      error => {
        var errorMessage = <any>error;

        if(errorMessage != null){
          var body = JSON.parse(error._body);
          this.errorMessage = body.message;
          console.log(error);
        }
      }
    );
  }

  logout(){
    localStorage.removeItem('identity');
    localStorage.removeItem('token');
    localStorage.clear();
    this.identity = null;
    this.token = null;
  }

  onSubmitRegister(){
    console.log(this.user_register);
  }

}
