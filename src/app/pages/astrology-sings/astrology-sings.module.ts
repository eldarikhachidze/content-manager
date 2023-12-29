import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AstrologySingsRoutingModule } from './astrology-sings-routing.module';
import { AstrologySingsComponent } from './astrology-sings.component';
import { AstrologySingsEditComponent } from './astrology-sings-edit/astrology-sings-edit.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AstrologySingsComponent,
    AstrologySingsEditComponent
  ],
    imports: [
        CommonModule,
        AstrologySingsRoutingModule,
        ReactiveFormsModule
    ]
})
export class AstrologySingsModule { }
