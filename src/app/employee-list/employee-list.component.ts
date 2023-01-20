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

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQyNTE0NzcsImlhdCI6MTY3NDI0Nzg3NywianRpIjoiNTE5ZDVhMjctMjQ3Yy00Y2RmLThkZDUtZDNmZDQ5MWRjYjU2IiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiI4YjI1ZTExYy0zOWQxLTQzMWEtODg4Mi0xY2QyNzViZTVmNmUiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.eMdtQfpexnR35Byyg1tdvWMRhBYIN-fhF-AEnKfaQWU2IlfYrfX5o-RCC8AgH7aPOizkvijCQL8d9pbdWauo5eyG8Nhu9XF1XJPl4qbaDYEMASsD_SXJlgJ-G-8jLeSL_g7AkchAXiizQWgWIsgYSpNs4-BJz_t5JH6XQeiud84Si41NJ2jGJxbishzdoDle0nnDVAQ5U3ABMNm2Rd6nzGkgcj9iVOMYxiOswPKzok89lxTsG-ZjeoHJzIacAuQNkRkioZtIJutdYUG1zjyHnyh1mWNZwOYFCQ0H-_hTF3m3i5bQrMmVfC-kAXjPwDNqiJCdXcufBSqkY2s5In4xpw';
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
