import { Routes } from '@angular/router';
import { ProductsComponent } from './productsModule/products/products.component';

// export const routes: Routes = [
//   {
//     path: 'products',
//     loadChildren: () =>
//       import('./productsModule/products.module').then(m => m.ProductsModule)
//   },
//    { path: '', redirectTo: 'products', pathMatch: 'full' }
// ];
export const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: '', redirectTo: 'products', pathMatch: 'full' }
];

