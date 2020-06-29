import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Category } from './../models/category';
import { Subcategory } from './../models/subcategory';


@Injectable()
export class SubcategoryService{
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http){
    this.url = GLOBAL.url;
  }

  addSubcategory(token, subcategory: Subcategory){
      let params = JSON.stringify(subcategory);
      let headers = new Headers({
          'Content-Type':'application/json',
          'Authorization':token
      });

      return this._http.post(this.url+'subcategory',params, {headers: headers})
                        .map(res => res.json());
  }
}
