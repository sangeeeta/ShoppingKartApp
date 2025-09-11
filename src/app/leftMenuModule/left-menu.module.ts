import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftMenuRoutingModule } from './left-menu-routing.module';
import { LeftMenuComponent } from './left-menu-component/left-menu.component';
//import { LeftMenuComponent } from './left-menu.component';


@NgModule({
  declarations: [
    LeftMenuComponent
  ],
  imports: [
    CommonModule,
    LeftMenuRoutingModule
  ],
  exports: [LeftMenuComponent]
})
export class LeftMenuModule { }
