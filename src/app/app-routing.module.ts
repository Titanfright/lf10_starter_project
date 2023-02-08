import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{EmployeeListComponent} from "./employee-list/employee-list.component";
import {AuthGuard} from "./utility/app.guard";
import {HeaderComponent} from "./header/header.component";
import {AddQualificationComponent} from "./add-qualification/add-qualification.component";
import {ListQualificationComponent} from "./list-qualification/list-qualification.component";
import {EditQualificationComponent} from "./edit-qualification/edit-qualification.component";


const routes: Routes = [
  { path: '', redirectTo: '/employee', pathMatch: 'full' },
  { path: 'employee', component: EmployeeListComponent, canActivate: [AuthGuard] },
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard]},
  { path: 'add-qualification', component: AddQualificationComponent, canActivate: [AuthGuard]},
  { path: 'list-qualification', component: ListQualificationComponent, canActivate: [AuthGuard]},
  { path: 'edit-qualification/:id', component: EditQualificationComponent, canActivate: [AuthGuard] },
  { path: '***', component: HeaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
