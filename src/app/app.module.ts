import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "./utility/app.init";
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {AddQualificationComponent} from "./add-qualification/add-qualification.component";
import {HeaderComponent} from "./header/header.component";
import {ListQualificationComponent} from "./list-qualification/list-qualification.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EditQualificationComponent } from './edit-qualification/edit-qualification.component';
import { SkillForFormsComponent } from './skill-for-forms/skill-for-forms.component';
export function kcFacotry(kcSecService: KeycloakService) {
  return () => kcSecService.init();
}

@NgModule({
  declarations: [
    AddEmployeeComponent,
    AddQualificationComponent,
    AppComponent,
    EditEmployeeComponent,
    EditQualificationComponent,
    EmployeeListComponent,
    HeaderComponent,
    ListQualificationComponent,
    SkillForFormsComponent,
    EditQualificationComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    KeycloakAngularModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]}

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
