import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Subject } from '../../models/subject';
import { Subcategory } from 'app/models/subcategory';
import { Category } from 'app/models/category';
import { GLOBAL } from '../../services/global';
import { UserService } from '../../services/user.service';
import { Problem }  from '../../models/problem';
import { ProblemService } from 'app/services/problem.service';
import { CategoryService } from 'app/services/category.service';
import { SubcategoryService } from '../../services/subcategory.service';
import { SubjectService } from './../../services/subject.service';



@Component({
  selector: 'app-problems-list',
  templateUrl: './problems-list.component.html',
  providers: [UserService,ProblemService,CategoryService,SubcategoryService,SubjectService],
  styleUrls: ['./problems-list.component.css']
})
export class ProblemsListComponent implements OnInit {
        public titulo: string;
        public problems: Problem[];
        public categories: Category[];
        public subcategories: Subcategory[];
        public subjects: Subject[];
        public identity;
        public token;
        public url: string;
        public next_page;
        public prev_page;

  constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        private _problemService: ProblemService,
        private _categoryService: CategoryService,
        private _subcategoryService: SubcategoryService,
        private _subjectService: SubjectService



      ){
        this.titulo = 'INCIDENCIAS';
        this.identity = this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url = GLOBAL.url;
        this.next_page = 1;
        this.prev_page = 1;
      }
  ngOnInit() {
    console.log('problems-list.component.ts cargado');

    //Conseguir el listado de Incidencias
    this.getProblems();
    this.getCategories();
    this.getSubcategories();
    this.getSubjects();
  }
  getProblems(){
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

      this._problemService.getProblems(this.token, page).subscribe(
        response => {
          if(!response.problems){
            this._router.navigate(['/']);
          }else{
            this.problems = response.problems;
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