import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import {AuthGuard} from "./utility/app.guard";
import {HeaderComponent} from "./header/header.component";
import {AddQualificationComponent} from "./add-qualification/add-qualification.component";
import {AddQualificationTableComponent} from "./add-qualification-table/add-qualification-table.component";


const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/header', pathMatch: 'full'},
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard]},
  { path: 'add-qualification', component: AddQualificationComponent},
  { path: 'add-qualification-table', component: AddQualificationTableComponent},
  { path: '***', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
