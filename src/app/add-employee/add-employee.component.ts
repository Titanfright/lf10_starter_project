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
  regPostcode = /^\d{5}$/;

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
      if(! this.regPostcode.test(this.e.postcode==null?"":this.e.postcode)){
        alert("The postal code must consist of 5 numbers.");
      }
      else {
        this.addEmployeeService.addEmployee(this.e)
          .subscribe();
        this.goHome();
      }
    }
  }

  goHome(){
    this.router.navigate(['employee']);
  }
}
