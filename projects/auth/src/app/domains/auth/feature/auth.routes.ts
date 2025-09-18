import { Routes } from '@angular/router';
import { AuthShellComponent } from './auth-shell.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthShellComponent,
    title: 'Auth'
  }
];