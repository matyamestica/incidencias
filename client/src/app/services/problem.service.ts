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
}  