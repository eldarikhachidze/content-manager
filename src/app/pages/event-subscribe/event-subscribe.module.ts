import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {EventSubscribeRoutingModule} from './event-subscribe-routing.module';
import {EventSubscribeComponent} from './event-subscribe.component';
import {FormsModule} from "@angular/forms";
import {NgbPagination} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    EventSubscribeComponent
  ],
  imports: [
    CommonModule,
    EventSubscribeRoutingModule,
    FormsModule,
    NgbPagination
  ]
})
export class EventSubscribeModule {
}
