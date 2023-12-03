import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "../events/events.component";
import {EventAddOrEditComponent} from "../events/event-add-or-edit/event-add-or-edit.component";
import {EventSubscribeComponent} from "./event-subscribe.component";

const routes: Routes = [
  {
    path: '',
    component: EventSubscribeComponent
  },
  // {
  //   path: 'create',
  //   component: EventAddOrEditComponent
  // },
  // {
  //   path: 'edit/:id',
  //   component: EventAddOrEditComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventSubscribeRoutingModule { }
