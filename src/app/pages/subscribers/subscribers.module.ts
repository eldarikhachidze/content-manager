import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscribersRoutingModule} from './subscribers-routing.module';
import {SubscribersComponent} from './subscribers.component';
import {SubscribersAddOrEditComponent} from './subscribers-add-or-edit/subscribers-add-or-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    SubscribersComponent,
    SubscribersAddOrEditComponent
  ],
  imports: [
    CommonModule,
    SubscribersRoutingModule,
    ReactiveFormsModule,
    NgbPagination
  ]
})
export class SubscribersModule {
}
