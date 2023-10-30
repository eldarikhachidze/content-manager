import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from "./users.component";
import {UsersAddOrAditComponent} from "./users-add-or-adit/users-add-or-adit.component";

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'edit/:id',
    component: UsersAddOrAditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
