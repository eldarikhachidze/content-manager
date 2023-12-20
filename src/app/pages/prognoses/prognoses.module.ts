import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrognosesRoutingModule } from './prognoses-routing.module';
import { PrognosesComponent } from './prognoses.component';
import { PrognosesAddOrEditComponent } from './prognoses-add-or-edit/prognoses-add-or-edit.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    PrognosesComponent,
    PrognosesAddOrEditComponent,
  ],
  imports: [
    CommonModule,
    PrognosesRoutingModule,
    ReactiveFormsModule
  ]
})
export class PrognosesModule { }
