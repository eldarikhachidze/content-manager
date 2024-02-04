import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EventsRoutingModule} from './events-routing.module';
import {EventsComponent} from './events.component';
import {EventAddOrEditComponent} from './event-add-or-edit/event-add-or-edit.component';
import {ReactiveFormsModule} from "@angular/forms";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    EventsComponent,
    EventAddOrEditComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,
    ReactiveFormsModule,
    NgbPagination
  ]
})
export class EventsModule {
}
