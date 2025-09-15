import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './component/orders/orders.component';
import { authGuard } from '../auth/guard/auth.guard';

export const ORDERS_ROUTES: Routes = [
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ORDERS_ROUTES)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
