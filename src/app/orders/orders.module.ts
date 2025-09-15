import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const ORDERS_ROUTES: Routes = [
  {
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(ORDERS_ROUTES)],
  exports: [RouterModule]
})
export class OrdersModule { }
