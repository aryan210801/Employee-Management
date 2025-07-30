import { Routes } from '@angular/router';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
  { path: '', redirectTo: 'add-employee', pathMatch: 'full' },
  {
    path: 'add-employee',
    loadComponent: () =>
      import('./add-employee/add-employee.component').then(
        (m) => m.AddEmployeeComponent
      ),
  },
  {
    path: 'show-employee',
    loadComponent: () =>
      import('./show-employee/show-employee.component').then(
        (m) => m.ShowEmployeeComponent
      ),
  },
];