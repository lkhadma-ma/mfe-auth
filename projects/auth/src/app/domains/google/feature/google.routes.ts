import { Routes } from '@angular/router';
import { GoogleDriveAuthComponent } from './google-drive-auth.component';


export const DRIVE_ROUTES: Routes = [
  {
    path: '',
    component: GoogleDriveAuthComponent,
    title: 'Auth'
  }
];