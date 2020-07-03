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
  getSubject(token, id: string){
    let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':token
    });

    let options = new RequestOptions({headers: headers});
    return this._http.get(this.url+'subject/'+id, options)
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

  addSubject(token, subject: Subject){
      let params = JSON.stringify(subject);
      let headers = new Headers({
          'Content-Type':'application/json',
          'Authorization':token
      });

      return this._http.post(this.url+'subject',params, {headers: headers})
                        .map(res => res.json());
  }
  editSubject(token, id:string, subject: Subject){
    let params = JSON.stringify(subject);
    let headers = new Headers({
        'Content-Type':'application/json',
        'Authorization':token
    });

         return this._http.put(this.url+'subject/'+id, params, {headers: headers})
                         .map(res => res.json());
  }

  deleteSubject(token, id:string){
    let headers = new Headers({
      'content-type':'aplication/json',
      'Authorization':token
    });
    let options = new RequestOptions({headers: headers});
    return this._http.delete(this.url+'subject/'+id, options)
                     .map(res => res.json());
  }
}
