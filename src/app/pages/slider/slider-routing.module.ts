import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SliderComponent} from "./slider.component";
import {SliderAddOrEditComponent} from "./slider-add-or-edit/slider-add-or-edit.component";

const routes: Routes = [
  {
    path: '',
    component: SliderComponent
  },
  {
    path: 'create',
    component: SliderAddOrEditComponent
  },
  {
    path: 'edit/:id',
    component: SliderAddOrEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SliderRoutingModule {
}
