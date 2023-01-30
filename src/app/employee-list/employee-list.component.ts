import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {EMPLOYEES} from "../mock-employees";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {KeycloakService} from "keycloak-angular";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  public get_bearer() {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", "http://authproxy.szut.dev", false );
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttp.send( "grant_type=password&client_id=employee-management-service&username=user&password=test" );
    return JSON.parse(xmlHttp.responseText)["access_token"]
  }
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
        .set('Authorization', `Bearer ${this.get_bearer()}`)
    });
  }

  private initializeUserOptions(): void{
    this.user = this.keycloakService.getUsername();
  }

  logout(): void{
    this.keycloakService.logout();
  }

}
