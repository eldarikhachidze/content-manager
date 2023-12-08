import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderRoutingModule} from './slider-routing.module';
import {SliderComponent} from './slider.component';
import {SliderAddOrEditComponent} from "./slider-add-or-edit/slider-add-or-edit.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SliderComponent,
    SliderAddOrEditComponent
  ],
  imports: [
    CommonModule,
    SliderRoutingModule,
    ReactiveFormsModule
  ]
})
export class SliderModule {
}
