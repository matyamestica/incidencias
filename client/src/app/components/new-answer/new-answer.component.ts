import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { User } from 'app/models/user';
import { Answer } from 'app/models/answer';
import { AnswerService } from 'app/services/answer.service';

@Component({
  selector: 'app-new-answer',
  templateUrl: './new-answer.component.html',
  providers: [UserService,AnswerService],
  styleUrls: ['./new-answer.component.css']
})
export class NewAnswerComponent implements OnInit {
  public titulo: string;
  public answer: Answer;
  public identity;
  public token;
  public url: string;
  public alertMessage;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _answerService: AnswerService

  ) {
    this.titulo = 'Respuesta';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.answer = new Answer('','','','','','');
   }

  ngOnInit() {
    console.log('new-answer.components.ts cargado');
  }

  onSubmit(){
    console.log(this.answer);
    this._answerService.addAnswer(this.token, this.answer).subscribe(
      response => {
          if(!response.category){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'La categoría se ha creado exitosamente!';
            this.answer = response.answer;
            //this._router.navigate(['/category-edit'], response.category._id);
          }

      },
      error => {
          var errorMessage = <any>error;
      if(errorMessage !=null){
        var body = JSON.parse(error._body);
        this.alertMessage = body.message;

        console.log(error);
      }    
      }
    )
  }

}
