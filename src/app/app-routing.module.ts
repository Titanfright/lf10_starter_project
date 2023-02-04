import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import {AuthGuard} from "./utility/app.guard";
import {EditEmployeeComponent} from "./edit-employee/edit-employee.component";
import {AddEmployeeComponent} from "./add-employee/add-employee.component";

const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'employee-edit/:id', component: EditEmployeeComponent,  canActivate: [AuthGuard] },
  { path: 'employee-add', component: AddEmployeeComponent,  canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
