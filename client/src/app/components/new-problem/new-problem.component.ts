import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { Problem } from '../../models/problem';
import { User } from '../../models/user';
import { ProblemService } from 'app/services/problem.service';


@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  providers: [UserService, ProblemService],
  styleUrls: ['./new-problem.component.css']
})
export class NewProblemComponent implements OnInit {
     public titulo: string;
     public problem: Problem;
     public identity;
     public token;
     public url: string;
     public alertMessage;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _problemService: ProblemService
  ) {
    this.titulo = 'Nueva Incidencia';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.problem = new Problem('','','','','','','','','','','','');
   }

  ngOnInit() {
    console.log('new-problem.component.ts cargado');
  }

  onSumbmit(){
    console.log(this.problem);
    this._problemService.addProblem(this.token, this.problem).subscribe(
        response => {
              if(!response.problem){
                this.alertMessage('Error en el servidor');
              }else{
                this.alertMessage('El problema se ha creado correctamente');
                this.problem = response.problem;
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
    );
  }

}
