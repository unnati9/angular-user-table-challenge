import { Routes } from '@angular/router';
import { UserTable } from './components/user-table/user-table';
import { UserDetail } from './components/user-detail/user-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserTable },
  { path: 'details/:id', component: UserDetail },
];
