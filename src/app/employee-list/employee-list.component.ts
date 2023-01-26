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

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQ3MjEzOTMsImlhdCI6MTY3NDcxNzc5MywianRpIjoiZTliMjE4OWUtYzk5Yy00YWNjLWFmMjAtNThlOTM4ZDg1ZDQyIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiIzNGYzMzVhOS0xZWM1LTRiZTYtODA3MS05MWE2NmQyYTVlYTAiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.PQHYR_1b7osuIttla1bOpviDpbBhhfwVu2en9RBxUBIEwjrVQz83G9ibpUUZbr2ljEieCxA4O4Lte7GmthND_vlPOnRTCT7Et24sEkKk70Jy-obxHjVrdgbjFXrgIKynCZKlAwEydUPe3oGhvcM2pSvW50622vhe0Y5vMhRNnZXkzlJgkamrajBLXjjfaKGVBfvDrw-pAV4uULLRb_38vTr3HFAg51wpYiKBOrbPvJPbK8sOiP9CLqnw7UixZX1cz0az6rTp-ARpHAvvtikbRqijcOZj-UVwwDG7i8WYuRoymLEYlv-XWcnSEBgmXs5mM7BZ0gBBUf_dZ9CmMaIq4g';
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
