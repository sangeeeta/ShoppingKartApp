// import { Routes } from '@angular/router';
// import { ProductsComponent } from './productsModule/products/products.component';
// import { AUTH_ROUTES } from './auth/auth-routing.module';

// export const routes: Routes = [
//  { path: '', redirectTo: 'login', pathMatch: 'full' },

//   // spread auth routes here
//   ...AUTH_ROUTES,

//   { path: '**', redirectTo: 'login' },
//   {
//     path: 'auth',
//     loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
//   },
//   { path: 'products', component: ProductsComponent },
//   { path: '', redirectTo: 'products', pathMatch: 'full' }
// ];


// import { Routes } from '@angular/router';
// import { ProductsComponent } from './productsModule/products/products.component';
// import { AUTH_ROUTES } from './auth/auth-routing.module';

// export const routes: Routes = [
//   // default redirect
//   { path: '', redirectTo: 'login', pathMatch: 'full' },

//   // auth routes
//   ...AUTH_ROUTES,

//   // products route
//   { path: 'products', component: ProductsComponent },

//   // wildcard
//   { path: '**', redirectTo: 'login' }
// ];

import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './auth/auth-routing.module';
import { ADMIN_ROUTES } from './admin/admin-routing.module';
import { DEALER_ROUTES } from './dealer/dealer-routing.module';
import { PRODUCTS_ROUTES } from './productsModule/products-routing.module';
import { ORDERS_ROUTES } from './orders/orders.module';
import { LoginComponent } from './auth/component/login/login.component';

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },

//   ...AUTH_ROUTES,
//   ...ADMIN_ROUTES,
//   ...DEALER_ROUTES,
//   ...PRODUCTS_ROUTES,
//   ...ORDERS_ROUTES,

//   { path: '**', redirectTo: 'login' }
// ];

// export const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   ...AUTH_ROUTES,        // login route only
//   { path: '**', redirectTo: 'login' }
// ];

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];



