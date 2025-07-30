import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from '../models/employees';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  private apiGetAllEmployeesUrl =
    'http://localhost:8080/api/employees/all-employees';
  private apiDeleteEmployeeUrl =
    'http://localhost:8080/api/employees/delete-user/';

  constructor(private http: HttpClient) {}
  getEmployees(): Observable<Employees[]> {
    return this.http.get<Employees[]>(this.apiGetAllEmployeesUrl);
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiDeleteEmployeeUrl}${id}`);
  }
  addEmployee(employee: Employees): Observable<any> {
    return this.http.post(
      'http://localhost:8080/api/employees/add-user',
      employee
    );
  }
}
