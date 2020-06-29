import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { Problem } from 'app/models/problem';

@Injectable()
export class ProblemService {
  public url: string;
  public identity;
  public token;

  constructor(private _http: Http) { 
      this.url = GLOBAL.url;
  }

  addProblem(token, problem: Problem){
    let params = JSON.stringify(problem);
    let headers = new Headers({
      'Content-Type':'application/json',
      'Authorization':token
    });
    
    return this._http.post(this.url+'problem', params, {headers: headers})
                      .map(res => res.json());
  }
}
