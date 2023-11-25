import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventsComponent} from "./events.component";
import {EventAddOrEditComponent} from "./event-add-or-edit/event-add-or-edit.component";

const routes: Routes = [
  {
    path: '',
    component: EventsComponent
  },
  {
    path: 'create',
    component: EventAddOrEditComponent
  },
  {
    path: 'edit/:id',
    component: EventAddOrEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
