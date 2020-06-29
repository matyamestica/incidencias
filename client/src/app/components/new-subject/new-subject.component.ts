import { Subject } from './../../models/subject';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { SubcategoryService } from '../../services/subcategory.service';
import { Subcategory } from '../../models/subcategory';
import { User } from 'app/models/user';


@Component({
  selector: 'app-new-subject',
  templateUrl: './new-subject.component.html',
  styleUrls: ['./new-subject.component.css'],
  providers:[UserService, SubjectService]
})
export class NewSubjectComponent implements OnInit {
  public titulo: string;
  public subject: Subject;
  public identity;
  public token;
  public url: string;
  public alertMessage;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _subjectService: SubjectService
  ) {
    this.titulo = 'Añadir Ramo/Certificación'
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.subject = new Subject('','','','');
   }

  ngOnInit() {
    console.log('nuevo ramo.component.ts cargado');
  }

}
