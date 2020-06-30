import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import user

import { UserEditComponent } from './components/user-edit.component';

// import category
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';

//import subcategory
import { NewSubcategoryComponent } from './components/new-subcategory/new-subcategory.component';
import { SubcategoriesListComponent } from './components/subcategories-list/subcategories-list.component';

//import subject
import { NewSubjectComponent } from './components/new-subject/new-subject.component';
import { SubjectListComponent } from './components/subject-list/subject-list.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'new-category', component: NewCategoryComponent},
    {path: 'new-subcategory', component: NewSubcategoryComponent},
    {path: 'new-subject', component: NewSubjectComponent},
    {path: 'subject-list', component: SubjectListComponent},
    {path: 'categories-list', component: CategoriesListComponent},
    {path: 'subcategories-list', component: SubcategoriesListComponent},
    {path: 'mis-datos', component: UserEditComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
