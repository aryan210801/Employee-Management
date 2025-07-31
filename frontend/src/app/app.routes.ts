import { Routes } from '@angular/router';
import { ShowEmployeeComponent } from './show-employee/show-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

export const routes: Routes = [
  { path: '', redirectTo: 'add-employee', pathMatch: 'full' },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'show-employee', component: ShowEmployeeComponent },
];