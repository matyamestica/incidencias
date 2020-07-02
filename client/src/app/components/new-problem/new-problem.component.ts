import { Subject } from './../../models/subject';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { ProblemService } from '../../services/problem.service';
import { Problem } from '../../models/problem';
import { User } from 'app/models/user';
import { Category } from 'app/models/category';
import { Subcategory } from 'app/models/subcategory';
import { CategoryService } from 'app/services/category.service';
import { SubcategoryService } from 'app/services/subcategory.service';
import { SubjectService } from 'app/services/subject.service';




@Component({
  selector: 'app-new-problem',
  templateUrl: './new-problem.component.html',
  styleUrls: ['./new-problem.component.css'],
  providers:[UserService, ProblemService,CategoryService, SubcategoryService,SubjectService]
})
export class NewProblemComponent implements OnInit {
  public titulo: string;
  public problem: Problem;
  public categories: Category[];
  public subcategories: Subcategory[];
  public subjects: Subject[];
  public identity;
  public token;
  public url: string;
  public alertMessage;
  public next_page;
  public prev_page;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _problemService: ProblemService,
    private _subcategoryService: SubcategoryService,
    private _subjectService: SubjectService,
    private _categoryService: CategoryService

  ) {
    this.titulo = 'Nueva Incidencia'
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
    this.problem = new Problem('','','','','','','','','','','','');
    this.next_page = 1;
    this.prev_page = 1;
   }

  ngOnInit() {
    console.log('new-problem.component.ts cargado');
    this.getCategories();
    this.getSubcategories();
    this.getSubjects();
  }

  onSubmit(){
    console.log(this.problem);
    this._problemService.addProblem(this.token, this.problem).subscribe(
      response => {
          if(!response.problem){
            this.alertMessage = 'Error en el servidor';
          }else{
            this.alertMessage = 'La categoría se ha creado exitosamente!';
            this.problem = response.problem;
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

  getCategories(){
    this._route.params.forEach((params: Params) => {
      let page = +params['page'];
      if(!page){
        page = 1;
      }else{
        this.next_page = page + 1;
        this.prev_page = page - 1;

        if(this.prev_page == 0){
          this.prev_page = 1;
        }
      }

      this._categoryService.getCategories(this.token, page).subscribe(
        response => {
          if(!response.categories){
            this._router.navigate(['/']);
          }else{
            this.categories = response.categories;
          }
        },
        error => {
          var errorMessage = <any>error;

          if(errorMessage != null){
            var body = JSON.parse(error._body);
            //this.alertMessage = body.message;

            console.log(error);
          }
        }
      )
    });
  }
  getSubcategories(){
    this._route.params.forEach((params: Params) => {
      let page = +params['page'];
      if(!page){
        page = 1;
      }else{
        this.next_page = page + 1;
        this.prev_page = page - 1;

        if(this.prev_page == 0){
          this.prev_page = 1;
        }
      }

      this._subcategoryService.getSubcategories(this.token, page).subscribe(
        response => {
          if(!response.subcategories){
            this._router.navigate(['/']);
          }else{
            this.subcategories = response.subcategories;
          }
        },
        error => {
          var errorMessage = <any>error;

          if(errorMessage != null){
            var body = JSON.parse(error._body);
            //this.alertMessage = body.message;

            console.log(error);
          }
        }
      )
    });
  }
  getSubjects(){
    this._route.params.forEach((params: Params) => {
      let page = +params['page'];
      if(!page){
        page = 1;
      }else{
        this.next_page = page + 1;
        this.prev_page = page - 1;

        if(this.prev_page == 0){
          this.prev_page = 1;
        }
      }

      this._subjectService.getSubjects(this.token, page).subscribe(
        response => {
          if(!response.subjects){
            this._router.navigate(['/']);
          }else{
            this.subjects = response.subjects;
          }
        },
        error => {
          var errorMessage = <any>error;

          if(errorMessage != null){
            var body = JSON.parse(error._body);
            //this.alertMessage = body.message;

            console.log(error);
          }
        }
      )
    });
  }    
}  