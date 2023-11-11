import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SubscribersComponent} from "./subscribers.component";
import {SubscribersAddOrEditComponent} from "./subscribers-add-or-edit/subscribers-add-or-edit.component";

const routes: Routes = [
  {
    path: '',
    component: SubscribersComponent
  },
  {
    path: 'add',
    component: SubscribersAddOrEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubscribersRoutingModule { }
