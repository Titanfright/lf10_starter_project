import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "./Employee";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditEmployeeService {
  employees$: Observable<Employee[]>;
  employeeUrl = "/backend/employees";
  e: Employee | undefined;
  header: HttpHeaders;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.header = new HttpHeaders();
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeeUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  updateEmployee(employee: Employee): Observable<any> {
    const url = `${this.employeeUrl}/${employee.id}`;
    return this.http.put(url, employee, this.httpOptions);
  }

  deleteEmployee(employee: Employee): Observable<any> {
    const url = `${this.employeeUrl}/${employee.id}`
    return this.http.delete<Employee>(url, this.httpOptions);
  }
}
