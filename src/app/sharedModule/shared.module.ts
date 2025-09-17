import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LeftMenuComponent } from './components/left-menu-component/left-menu.component';
import { RouterModule } from "@angular/router";
import '@iconify/iconify';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    LayoutComponent,
    LeftMenuComponent,
    AlertComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent,
    LeftMenuComponent,
    AlertComponent,
    HeaderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class SharedModule { }
