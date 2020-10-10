import { routing, appRoutingProviders } from './app.routing';
import { UserEditComponent } from './components/user-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SubjectEditComponent } from './components/subject-edit/subject-edit.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { SubcategoryEditComponent } from './components/subcategory-edit/subcategory-edit.component';
import { SearchComponent } from './components/search/search.component';
import { SearchPipe } from './pipes/search.pipe';
import { NewAnswerComponent } from './components/new-answer/new-answer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';



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
    SubjectEditComponent,
    CategoryEditComponent,
    SubcategoryEditComponent,
    SearchComponent,
    SearchPipe,
    NewAnswerComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
