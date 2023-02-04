import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "./utility/app.init";
import {AddQualificationComponent} from "./add-qualification/add-qualification.component";
import {HeaderComponent} from "./header/header.component";
import {ListQualificationComponent} from "./list-qualification/list-qualification.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Qualification} from "./Qualification";
import { EditQualificationComponent } from './edit-qualification/edit-qualification.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    HeaderComponent,
    AddQualificationComponent,
    ListQualificationComponent,
    EditQualificationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    KeycloakAngularModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
