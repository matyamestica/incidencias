import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { Problem } from '../../models/problem';
import { User } from '../../models/user';


@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  providers: [UserService],
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
    private _userService: UserService
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

}
