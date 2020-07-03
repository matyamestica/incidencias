import { Subject } from './../models/subject';
import { Subcategory } from 'app/models/subcategory';
import { Category } from 'app/models/category';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Problem } from './../models/problem';
import { Answer } from './../models/answer';
 
@Injectable()
export class AnswerService {
  public url: string;
  public identity;
  public token;

 constructor(private _http: Http){
    this.url = GLOBAL.url;
  }

  addAnswer(token, answer: Answer){
    let params = JSON.stringify(answer);
    let headers = new Headers({
        'Content-type':'application/json',
        'Authorization':token
    });

    return this._http.post(this.url+'answer',params, {headers: headers})
                     .map(res => res.json());
  }
}
