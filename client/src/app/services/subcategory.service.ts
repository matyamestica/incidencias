import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
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
  getSubcategory(token, id: string){
    let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':token
    });

    let options = new RequestOptions({headers: headers});
    return this._http.get(this.url+'subcategory/'+id, options)
                      .map(res => res.json());
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
  getSubcategories(token, page){
    let headers = new Headers({
      'Content-type':'application/json',
      'Authorization':token
    });

    let options = new RequestOptions({ headers: headers});
    return this._http.get(this.url+'subcategories/'+page, options)
                      .map(res => res.json());
  }
  editSubcategory(token, id:string, subcategory: Subcategory){
    let params = JSON.stringify(subcategory);
    let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':token
    });

         return this._http.put(this.url+'update-subcategory/'+id, params, {headers: headers})
                         .map(res => res.json());
  }
  deleteSubcategory(token, id: string){
    let headers = new Headers({
      'Content-type':'application/json',
      'Authorization':token
    });

    let options = new RequestOptions({ headers: headers});
    return this._http.delete(this.url+'subcategory/'+id, options)
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
}










