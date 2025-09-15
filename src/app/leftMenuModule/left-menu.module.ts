import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeftMenuRoutingModule } from './left-menu-routing.module';
import { LeftMenuComponent } from './left-menu-component/left-menu.component';
import { RouterModule } from '@angular/router';
//import { LeftMenuComponent } from './left-menu.component';


// @NgModule({
//   declarations: [
//     LeftMenuComponent
//   ],
//   imports: [
//     CommonModule,
//     LeftMenuRoutingModule
//   ],
//   exports: [LeftMenuComponent]
// })
@NgModule({
   //declarations: [LeftMenuComponent],
  imports: [CommonModule, RouterModule, LeftMenuComponent],
  exports: [LeftMenuComponent]
})
export class LeftMenuModule { }
