import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UsersAddOrAditComponent } from './users-add-or-adit/users-add-or-adit.component';


@NgModule({
  declarations: [
    UsersComponent,
    UsersAddOrAditComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
