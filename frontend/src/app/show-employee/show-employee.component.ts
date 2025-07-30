import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Employees } from '../models/employees';
import { EmployeesService } from '../services/employees.service';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-show-employee',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.scss'],
})
export class ShowEmployeeComponent implements OnInit {
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'actions'];
  users: Employees[] = [];
  constructor(private employeesService: EmployeesService) {}
  ngOnInit() {
    this.loadEmployees(); // Fetch on component load
  }

  loadEmployees() {
    this.employeesService.getEmployees().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Failed to load employees', err);
      },
    });
  }

  deleteUser(index: number) {
    const employee = this.users[index];

    if (!employee?.id) return;

    this.employeesService.deleteEmployee(employee.id).subscribe({
      next: () => {
        this.users.splice(index, 1);
        this.users = [...this.users];
      },
      error: (err) => {
        console.error('Failed to delete employee:', err);
      },
    });
  }

  updateUser(user: any) {
    // Implement update logic here
    alert(`Update user: ${user.firstName}`);
  }

  viewDetails(user: any) {
    // Implement details logic here
    alert(`View details of: ${user.firstName}`);
  }
}
