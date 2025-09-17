import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LeftMenuComponent } from './components/left-menu-component/left-menu.component';
import { RouterModule } from "@angular/router";
import '@iconify/iconify';

@NgModule({
  declarations: [
    LayoutComponent,
    LeftMenuComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    LeftMenuComponent,
    AlertComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class SharedModule { }
