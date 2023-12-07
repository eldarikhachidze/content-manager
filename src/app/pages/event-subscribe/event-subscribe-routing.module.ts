import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EventSubscribeComponent} from "./event-subscribe.component";

const routes: Routes = [
  {
    path: '',
    component: EventSubscribeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventSubscribeRoutingModule { }
