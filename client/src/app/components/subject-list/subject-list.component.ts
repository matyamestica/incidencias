import { SubjectService } from './../../services/subject.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { UserService } from 'app/services/user.service';
import { Subject } from '../../models/subject';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  providers: [UserService,SubjectService],
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {
  public titulo: string;
  public subjects: Subject[];
  public subject: Subject;
  public identity;
  public token;
  public url: string;
  public next_page;
  public prev_page;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _subjectService: SubjectService
  ) {
    this.titulo = 'Ramos';
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.next_page = 1;
    this.prev_page = 1;
   }

  ngOnInit() {
    console.log('subject-list.component.ts cargado');

    //Conseguir el listado de Categorías
    this.getSubjects();
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

  getSubjects(){
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

      this._subjectService.getSubjects(this.token, page).subscribe(
        response => {
          if(!response.subjects){
            this._router.navigate(['/']);
          }else{
            this.subjects = response.subjects;
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

  deleteSubject(id){
    this._subjectService.deleteSubject(this.token, id).subscribe(
      response => {
        if(!response.subjects){
          //alert('Error en el servidor');
        }
          this.getSubjects();
        },
        error => {
          var errorMessage = <any>error;

          if(errorMessage != null){
            var body = JSON.parse(error._body);
            //this.alertMessage = body.message;
          }
        }
    );
  }
}
