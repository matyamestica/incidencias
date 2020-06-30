import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Subject } from './../models/subject';


@Injectable()
export class SubjectService{
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http){
    this.url = GLOBAL.url;
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

  addSubject(token, subject: Subject){
      let params = JSON.stringify(subject);
      let headers = new Headers({
          'Content-Type':'application/json',
          'Authorization':token
      });

      return this._http.post(this.url+'subject',params, {headers: headers})
                        .map(res => res.json());
  }
}