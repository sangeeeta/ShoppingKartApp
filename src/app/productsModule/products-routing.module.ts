import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const PRODUCTS_ROUTES: Routes = [
  { path: '', component: ProductsComponent }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export class ProductsRoutingModule { }
