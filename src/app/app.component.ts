import {Component} from '@angular/core';
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
