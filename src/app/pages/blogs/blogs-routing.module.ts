import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogsComponent} from "./blogs.component";
import {BlogsAddOrEditComponent} from "./blogs-add-or-edit/blogs-add-or-edit.component";

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent
  },

  {
    path: 'create',
    component: BlogsAddOrEditComponent
  },
  {
    path: 'edit/:id',
    component: BlogsAddOrEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
