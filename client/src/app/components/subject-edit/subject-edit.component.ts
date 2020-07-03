import { Component, OnInit } from '@angular/core';
import { Subject } from '../../models/subject';
import { SubjectService } from 'app/services/subject.service';
import { UserService } from 'app/services/user.service';
import { User } from 'app/models/user';
import { GLOBAL } from '../../services/global';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-subject-edit',
  templateUrl: './subject-edit.component.html',
  styleUrls: ['./subject-edit.component.css'],
  providers: [SubjectService,UserService]
})
export class SubjectEditComponent implements OnInit {
  public titulo: string;
  public subject: Subject;
  public user: User;
  public identity;
  public token;
  public alertMessage;
  public url:string;
  public is_edit;

  constructor(
    private _subjectService: SubjectService,
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router


  ) {
    this.titulo = 'Actualizar Ramo';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.user = this.identity;
    this.url = GLOBAL.url;
    this.subject = new Subject('','','','');
    this.is_edit = true;
   }

  ngOnInit() {
    console.log('subject-edit.component.ts cargado');
    this.getSubject();
  }
  getSubject(){
    this._route.params.forEach((params: Params) => {
            let id = params['id'];

            this._subjectService.getSubject(this.token, id).subscribe(
                response => {
                        if(!response.subject){
                            this._router.navigate(['/']);
                        }else{
                            this.subject = response.subject;
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
    console.log(this.subject);
    this._route.params.forEach((params: Params) => {
        let id = params['id'];

            this._subjectService.editSubject(this.token,id , this.subject).subscribe(
                response => {
                    this.subject = response.subject;

                    if(!response.subject){
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
