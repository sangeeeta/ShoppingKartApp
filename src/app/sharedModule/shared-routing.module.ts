import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,   // Common layout
    children: [
      {
        path: 'dealer',
        loadChildren: () =>
          import('../dealer/dealer.module').then(m => m.DealerModule)
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../admin/admin.module').then(m => m.AdminModule)
      },
      { path: '', redirectTo: 'dealer/dashboard', pathMatch: 'full' } // default landing
    ]
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class SharedRoutingModule { }
