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

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzU4NzAxNjAsImlhdCI6MTY3NTg2NjU2MCwianRpIjoiNjNmZDNmMGUtNmU5ZC00ZjM4LTk5YzQtN2Y0OGRmZDUxNWQ5IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJhYWEyMTA1YS05NmY0LTQ1YjMtODUyOC05YWIxZWQ5MGQzNmUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.cdbCiMURvG3-b5X54OAx9WRlY9zw9pdUyfF6LNuIj41ysgQZxvfW47kVToNKrQYPSTWqRZ-gUKXhNJwHdiVA8CvtiVOsJT1wJLHTxjMOC0Erd6sHuyn0G6Q7JyCQAmlAGT9rjGmfsSkCKmziHZCooG5TGFPUpdR-NyN_tvZqMFr9PL6s_KOS0BJbyp-VKiG6XKFTLUWEg4Ab8q0nkxwRvlBFW6HQSG7inNgaVdUYke2RxZu_edIPzonS7HNYsg11u5pRnQ3LYYIM6s1YohPro6VZ25M_ZytS01JX1-jpUwFN3jcIod5cx2aC-QZiCdTv5__hChQlkhxO-nNF7Gpj6A'
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
