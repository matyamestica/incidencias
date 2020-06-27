import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { Subcategory } from '../../models/subcategory';
import { User } from 'app/models/user';

@Component({
  selector: 'app-new-subcategory',
  templateUrl: './new-subcategory.component.html',
  providers: [UserService],
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
    private _userService: UserService
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

}
