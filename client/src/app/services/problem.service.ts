import { Subject } from './../models/subject';
import { Subcategory } from 'app/models/subcategory';
import { Category } from 'app/models/category';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Problem } from './../models/problem';


@Injectable()
export class ProblemService{
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http){
    this.url = GLOBAL.url;
  }

  getProblem(token, id: string){
    let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':token
    });

    let options = new RequestOptions({headers: headers});
    return this._http.get(this.url+'problem/'+id, options)
                      .map(res => res.json());
  }  

  getProblems(token, page){
    let headers = new Headers({
      'Content-type':'application/json',
      'Authorization':token
    });

    let options = new RequestOptions({ headers: headers});
    return this._http.get(this.url+'problems/'+page, options)
                      .map(res => res.json());
  }
  addProblem(token, problem: Problem){
    let params = JSON.stringify(problem);
    let headers = new Headers({
        'Content-type':'application/json',
        'Authorization':token
    });

    return this._http.post(this.url+'problem',params, {headers: headers})
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
  getSubcategories(token, page){
    let headers = new Headers({
      'Content-type':'application/json',
      'Authorization':token
    });

    let options = new RequestOptions({ headers: headers});
    return this._http.get(this.url+'subcategories/'+page, options)
                      .map(res => res.json());
  }
  getSubjects(token, page){
    let headers = new Headers({
      'Content-type':'application/json',
      'Authorization':token
    });

    let options = new RequestOptions({ headers: headers});
    return this._http.get(this.url+'subjects/'+page, options)
                      .map(res => res.json());
  }
  getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));

    if(identity != "undefined"){
      this.identity = identity;
    }else{
      identity = null;
    }
    return this.identity;

  }

  getToken(){
    let token = localStorage.getItem('token');

    if(token !="undefined"){
      this.token = token;
    }else{
      this.token = null;
    }
    return this.token;
  }
}
