import { Component, OnInit } from '@angular/core';
import {Observable, of} from "rxjs";
import {Employee} from "../Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  bearer = 'eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICIzUFQ0dldiNno5MnlQWk1EWnBqT1U0RjFVN0lwNi1ELUlqQWVGczJPbGU0In0.eyJleHAiOjE2NzQyNDg5MDQsImlhdCI6MTY3NDI0NTMwNCwianRpIjoiZTUxYzU5OTktZjZiMi00Mzk2LTk4ZGYtY2JhYjhhNmUwNjEwIiwiaXNzIjoiaHR0cHM6Ly9rZXljbG9hay5zenV0LmRldi9hdXRoL3JlYWxtcy9zenV0IiwiYXVkIjoiYWNjb3VudCIsInN1YiI6IjU1NDZjZDIxLTk4NTQtNDMyZi1hNDY3LTRkZTNlZWRmNTg4OSIsInR5cCI6IkJlYXJlciIsImF6cCI6ImVtcGxveWVlLW1hbmFnZW1lbnQtc2VydmljZSIsInNlc3Npb25fc3RhdGUiOiJjNzM0ODBkNS1hNzkwLTQzY2MtYTVlNy1jN2NkMDFkZjZlMGQiLCJhY3IiOiIxIiwiYWxsb3dlZC1vcmlnaW5zIjpbXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiZGVmYXVsdC1yb2xlcy1zenV0IiwidW1hX2F1dGhvcml6YXRpb24iLCJ1c2VyIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6InVzZXIifQ.OUPOvFBozTo3t9M-FoVjw55lT0mJrdizHi-1cBe_rjTQEQTDVIKEX1CyrLNgE22lZ-4BGzMk10OUU-I-mIwErQyElAOu5VkdMDnc7dcAj-QOXR-LWqtH2gSTAnioJX3p2rcFqwkUnJRx6NLYjCXCqxSZ5PabI8kwHSTxTGKLPIqljNSEVVLhy7vh0_gD6pDKC9kTcKtB3ibPVTmtxg9GJThW2HZxa0xOJJyK8_gCaUi5HZWLysJoRdeR9ZEX_kbOF7hgovoj1fNEmjmyBHDkRgqnc7K3KqtvEaPKAyyO1oAIYKNYNI49L3gjFIJDqIWD-1IiHvxH1l241EMzE19OzA';
  employees$: Observable<Employee[]>;

  constructor(private http: HttpClient) {
    this.employees$ = of([]);
    this.fetchData();
  }

  fetchData() {
    this.employees$ = this.http.get<Employee[]>('/backend', {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer ${this.bearer}`)
    });
  }

}
