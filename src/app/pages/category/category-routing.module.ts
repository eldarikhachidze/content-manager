import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from "./category.component";
import {CategoryAddOrEditComponent} from "./category-add-or-edit/category-add-or-edit.component";

const routes: Routes = [
  {
    path: '',
    component: CategoryComponent
  },
  {
    path: 'create',
    component: CategoryAddOrEditComponent
  },
  {
    path: 'edit/:id',
    component: CategoryAddOrEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
