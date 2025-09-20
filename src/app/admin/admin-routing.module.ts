import { RouterModule, Routes } from "@angular/router";
import { authGuard } from "../auth/guard/auth.guard";
import { roleGuard } from "../auth/guard/role.guard";
import { AdminDashboardComponent } from "./component/admin-dashboard/admin-dashboard.component";
import { NgModule } from "@angular/core";
import { UserManagementComponent } from "./component/user-management/user-management.component";
import { ProductManagementComponent } from "./component/product-management/product-management.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: '', 
    canActivate: [authGuard, roleGuard],
    data: { role: 'admin' },
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'user-management', component: UserManagementComponent, canActivate: [authGuard] },
      { path: 'product-management', component: ProductManagementComponent, canActivate: [authGuard] }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ADMIN_ROUTES)],
  exports: [RouterModule]
})


export class AdminRoutingModule { }
