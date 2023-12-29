import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AstrologySingsComponent} from "./astrology-sings.component";
import {AstrologySingsEditComponent} from "./astrology-sings-edit/astrology-sings-edit.component";

const routes: Routes = [
  {
    path: '',
    component: AstrologySingsComponent
  },
  {
    path: 'edit/:id',
    component: AstrologySingsEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AstrologySingsRoutingModule { }
