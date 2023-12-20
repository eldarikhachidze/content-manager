import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PrognosesComponent} from "./prognoses.component";
import {PrognosesAddOrEditComponent} from "./prognoses-add-or-edit/prognoses-add-or-edit.component";

const routes: Routes = [
  {
    path: '',
    component: PrognosesComponent
  },
  {
    path: 'create',
    component: PrognosesAddOrEditComponent
  },
  {
    path: 'edit/:id',
    component: PrognosesAddOrEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrognosesRoutingModule { }
