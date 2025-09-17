import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DealerDashboardComponent } from './component/dealer-dashboard/dealer-dashboard.component';
import { authGuard } from '../auth/guard/auth.guard';
import { roleGuard } from '../auth/guard/role.guard';
import { ProductsComponent } from '../productsModule/products/products.component';

export const DEALER_ROUTES: Routes = [
  {
    path: '', 
    canActivate: [authGuard, roleGuard],
    data: { role: 'dealer' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DealerDashboardComponent },
      { path: 'products', component: ProductsComponent, canActivate: [authGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(DEALER_ROUTES)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
