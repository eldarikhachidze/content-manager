import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from './components/header/header.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  exports: [
    MainLayoutComponent
  ]
})
export class MainLayoutModule { }
