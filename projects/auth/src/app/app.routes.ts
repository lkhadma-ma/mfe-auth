import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
    {
        path: 'login',
        loadChildren: () => import('./domains/auth/feature/auth.routes').then(m => m.AUTH_ROUTES)
    },
    {
        path: 'drive',
        loadChildren: () => import('./domains/google/feature/google.routes').then(m => m.DRIVE_ROUTES)
    }
];
