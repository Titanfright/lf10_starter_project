import {Component, OnInit} from '@angular/core';
import {Employee} from "./Employee";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AddQualificationComponent} from "./add-qualification/add-qualification.component";
import {HeaderComponent} from "./header/header.component";
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list-qualification app';

  constructor() {
 }

  @HostListener('window:beforeunload', ['$event'])
  beforeunloadHandler(event:any) {
    return false;
  }

}
