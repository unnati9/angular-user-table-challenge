import { Routes } from '@angular/router';
import { UserTable } from './components/user-table/user-table';
import { UserDetail } from './components/user-detail/user-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UserTable },
  { path: 'details/:id', component: UserDetail },
  { path: 'dashboard', component: UserTable }, // Dummy route
  { path: 'settings', component: UserTable }, // Dummy route
  { path: 'reports', component: UserTable }, // Dummy route
  { path: '**', redirectTo: '/users' }, // Wildcard for undefined routes
];
