import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import user

import { UserEditComponent } from './components/user-edit.component';

// import category
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { NewCategoryComponent } from './components/new-category/new-category.component';  


const appRoutes: Routes = [
    {path: '', component: CategoriesListComponent},
    {path: 'new-category', component: NewCategoryComponent},
    {path: 'categories/:page', component: CategoriesListComponent},
    {path: 'mis-datos', component: UserEditComponent},
    {path: '**', component: CategoriesListComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
