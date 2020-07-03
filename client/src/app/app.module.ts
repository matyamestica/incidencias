import { routing, appRoutingProviders } from './app.routing';
import { UserEditComponent } from './components/user-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NewSubcategoryComponent } from './components/new-subcategory/new-subcategory.component';
import { NewSubjectComponent } from './components/new-subject/new-subject.component';
import { HomeComponent } from './components/home/home.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubcategoriesListComponent } from './components/subcategories-list/subcategories-list.component';
import { ProblemsListComponent } from './components/problems-list/problems-list.component';
import { NewProblemComponent } from './components/new-problem/new-problem.component';
import { NewAnswerComponent } from './components/new-answer/new-answer.component';



@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    CategoriesListComponent,
    NewCategoryComponent,
    NewSubcategoryComponent,
    NewSubjectComponent,
    HomeComponent,
    SubjectListComponent,
    SubcategoriesListComponent,
    ProblemsListComponent,
    NewProblemComponent,
    NewAnswerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
