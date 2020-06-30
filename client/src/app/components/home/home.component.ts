import { UserService } from './../../services/user.service';
import { GLOBAL } from './../../services/global';

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.titulo = 'Este es el Home';
   }

  ngOnInit() {
    console.log('home.component.ts esta cargado beibi');
  }

}
