import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BlogsRoutingModule} from './blogs-routing.module';
import {BlogsAddOrEditComponent} from './blogs-add-or-edit/blogs-add-or-edit.component';
import {BlogsComponent} from "./blogs.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    BlogsComponent,
    BlogsAddOrEditComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    ReactiveFormsModule,
    NgbPagination
  ]
})
export class BlogsModule {
}
