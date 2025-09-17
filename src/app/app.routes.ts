import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './sharedModule/components/layout/layout.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dealer',
        loadChildren: () => import('./dealer/dealer.module').then(m => m.DealerModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },
      // Default landing inside layout
      { path: '', redirectTo: 'dealer/dashboard', pathMatch: 'full' }
    ]
  },

  // 4️⃣ Wildcard redirect
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}