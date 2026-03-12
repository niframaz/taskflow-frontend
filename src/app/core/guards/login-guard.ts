import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';
import { firstValueFrom } from 'rxjs';

export const loginGuard: CanActivateFn = async (route, state) => {
  const authService = inject(Auth);
  const router = inject(Router);

  const user = await firstValueFrom(authService.currentUser$);

  if (user) {
    router.navigate(['/']);
    return false;
  }

  return true;
};
