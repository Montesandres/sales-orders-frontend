import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { inject } from '@angular/core';
import { ValidRoles } from '../../common/enums/valid-roles.enum';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = await authService.checkAutentication();

  if (!token) {
    router.navigate(['/login']);
    return false;
  }

  const roles = token!.user.roles;

  const rolesData: ValidRoles[] = route.data['roles'];

  for (let i = 0; i < rolesData.length; i++) {
    for (let e = 0; e < roles.length; e++) {
      if (rolesData[i] === roles[e]) {
        return true;
      }
    }
  }

  router.navigate(['/login']);
  return false;
};
