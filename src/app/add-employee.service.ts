import { Injectable } from '@angular/core';
import {Employee} from "./Employee";
import {catchError, Observable, retry, throwError} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddEmployeeService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  employeeUrl = "/backend/employees";
  constructor(private http: HttpClient) { }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeeUrl, employee, this.httpOptions).pipe (
      retry (1),
      catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = error
      Code: {error.status};
      nMessage: {error.message};
    }
    window.alert(errorMessage);
    return throwError(() => {
      return errorMessage;
    });
  }
}
