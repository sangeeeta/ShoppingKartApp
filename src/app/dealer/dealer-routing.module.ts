import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerDashboardComponent } from './component/dealer-dashboard/dealer-dashboard.component';
import { authGuard } from '../auth/guard/auth.guard';
import { roleGuard } from '../auth/guard/role.guard';

export const DEALER_ROUTES: Routes = [
  {
    path: 'dealer',
    component: DealerDashboardComponent,
     canActivate: [authGuard, roleGuard],
    data: { role: 'dealer' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(DEALER_ROUTES)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
