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

//import subject
import { NewSubjectComponent } from './components/new-subject/new-subject.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'new-category', component: NewCategoryComponent},
    {path: 'new-subcategory', component: NewSubcategoryComponent},
    {path: 'new-subject', component: NewSubjectComponent},
    {path: 'categories/:page', component: CategoriesListComponent},
    {path: 'mis-datos', component: UserEditComponent},
    {path: '**', component: HomeComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
