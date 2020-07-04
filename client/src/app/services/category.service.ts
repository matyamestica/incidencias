import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Category } from './../models/category';

@Injectable()
export class CategoryService{
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http){
    this.url = GLOBAL.url;
  }

  getCategory(token, id: string){
    let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':token
    });

    let options = new RequestOptions({headers: headers});
    return this._http.get(this.url+'category/'+id, options)
                      .map(res => res.json());
  }

  getCategories(token, page){
    let headers = new Headers({
      'Content-type':'application/json',
      'Authorization':token
    });

    let options = new RequestOptions({ headers: headers});
    return this._http.get(this.url+'categories/'+page, options)
                      .map(res => res.json());
  }

  addCategory(token, category: Category){
    let params = JSON.stringify(category);
    let headers = new Headers({
        'Content-type':'application/json',
        'Authorization':token
    });

    return this._http.post(this.url+'category',params, {headers: headers})
                     .map(res => res.json());
  }
  editCategory(token, id:string, category: Category){
    let params = JSON.stringify(category);
    let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':token
    });

         return this._http.put(this.url+'update-category/'+id, params, {headers: headers})
                         .map(res => res.json());
  }
  deleteCategory(token, id: string){
    let headers = new Headers({
      'Content-type':'application/json',
      'Authorization':token
    });

    let options = new RequestOptions({ headers: headers});
    return this._http.delete(this.url+'category/'+id, options)
                      .map(res => res.json());
  }
}
