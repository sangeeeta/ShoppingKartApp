import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { authGuard } from '../auth/guard/auth.guard';
import { roleGuard } from '../auth/guard/role.guard';

export const ADMIN_ROUTES: Routes = [
  {
    path: 'admin',
    loadChildren: () => import('../leftMenuModule/left-menu.module').then(m => m.LeftMenuModule),
    canActivate: [authGuard, roleGuard],
    data: { role: 'admin' }
  }
];

export class AdminRoutingModule { }
