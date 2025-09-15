import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';

export const AUTH_ROUTES: Routes = [
  { path: 'login', component: LoginComponent }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
// export class AuthRoutingModule {}
