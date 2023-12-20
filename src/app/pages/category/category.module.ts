import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryAddOrEditComponent } from './category-add-or-edit/category-add-or-edit.component';
import {CategoryComponent} from "./category.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    CategoryComponent,
    CategoryAddOrEditComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule { }
