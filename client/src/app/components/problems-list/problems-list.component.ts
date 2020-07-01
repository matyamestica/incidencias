import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { Problem }  from '../../models/problem';
import { ProblemService } from 'app/services/problem.service';

@Component({
  selector: 'app-problems-list',
  templateUrl: './problems-list.component.html',
  providers: [UserService,ProblemService],
  styleUrls: ['./problems-list.component.css']
})
export class ProblemsListComponent implements OnInit {
        public titulo: string;
        public problems: Problem[];
        public identity;
        public token;
        public url: string;
        public next_page;
        public prev_page;

  constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _problemService: ProblemService


      ){
        this.titulo = 'INCIDENCIAS';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.next_page = 1;
        this.prev_page = 1;
      }
  ngOnInit() {
    console.log('problems-list.component.ts cargado');

    //Conseguir el listado de Incidencias
    this.getProblems();
  }
  getProblems(){
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

      this._problemService.getProblems(this.token, page).subscribe(
        response => {
          if(!response.problems){
            this._router.navigate(['/']);
          }else{
            this.problems = response.problems;
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