import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { authGuard } from '../auth/guard/auth.guard';

export const PRODUCTS_ROUTES: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(PRODUCTS_ROUTES)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
