import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzU1MTg4MTYsImlhdCI6MTY3NTUxNTIxNiwianRpIjoiNDljMDgzNDMtNzI5MC00NTQwLWE3ZTgtYzhiY2Q0NTJjYTlhIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJkZTQxMDY3Mi03YmQ5LTRhMjctYTNmYi1kMjViYThlYzdkNTQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.H0OWHsKXYDx0OJ9zPJozDnoxCC-sOAAtwXLYMRg4tKbjBz034xKheVx95AEtuVyEKxoRNtVvzcM3maUrNwn0NsB_1YZXa9tTwzwf9wJ1ZTXlTSv2-EjPqI5gRiFklsexQk7Qgr2_qkQARwovaNlpYOkn9foc9W2DVrrbi0ScGbY_G9NAFhYtx_3pEVBqe8rtvkX40wqn8ctduF4ozW2eETriVenEomKlK6-TuCGlTvw_39jcjbPX1UsYvpPG4TxnWuGsWV45bYHJOusGv0XxCC4bLu8o6gkNxj6WwQ739ArtQbNJSE_6smO7l5u6JJkx6XBE4eITRdkdOUTkN7r82w';
  employees$: Observable<Employee[]>;

  user = "";
  constructor(private http: HttpClient, private keycloakService: KeycloakService) {
    this.employees$ = of([]);
    this.fetchData();
  }

  ngOnInit(): void{
    this.initializeUserOptions();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

  private initializeUserOptions(): void{
    this.user = this.keycloakService.getUsername();
  }

  logout(): void{
    this.keycloakService.logout();
  }

}
