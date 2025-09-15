// import { CanActivateFn } from '@angular/router';

// export const roleGuard: CanActivateFn = (route, state) => {
//   return true;
// };

import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../service/auth.service';

export const roleGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  const expectedRole = route.data['role'];
  if (auth.getRole() !== expectedRole) {
    router.navigate(['/login']); // or unauthorized page
    return false;
  }
  return true;
};
