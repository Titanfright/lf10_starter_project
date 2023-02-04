import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {AddEmployeeService} from "../add-employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  e: Employee | undefined;

  constructor(private addEmployeeService: AddEmployeeService, private router: Router) {
  }

  ngOnInit() {
    this.createEmployeeModel();
  }

  createEmployeeModel(): void{
    this.e = new Employee();
  }

  createEmployee(): void{
    if (this.e) {
      this.addEmployeeService.addEmployee(this.e)
        .subscribe();
      //this.router.navigate(['employee']);
    }
  }
}
