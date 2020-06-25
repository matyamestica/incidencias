import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  providers: [UserService],
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
        public titulo: string;
        public categories: Category[];
        public identity;
        public token;
        public url: string;

  constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService

      ){
        this.titulo = 'Categorías';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
      } 
  ngOnInit() {
    console.log('categories-list.component.ts cargado');

    //Conseguir el listado de Categorías
  }

}
