import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login/login';
import { Home } from './features/home/home';
import { authGuard } from './core/guards/auth-guard';
import { loginGuard } from './core/guards/login-guard';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/organizations/organization-list/organization-list').then(
            (m) => m.OrganizationList,
          ),
      },
      {
        path: 'organizations/:id',
        loadComponent: () =>
          import('./features/organizations/organization/organization').then((m) => m.Organization),
      },
    ],
  },
  { path: 'login', component: Login, canActivate: [loginGuard] },
  { path: '**', redirectTo: '/' },
];
