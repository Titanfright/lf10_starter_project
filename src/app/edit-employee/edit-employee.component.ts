import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute, Router} from "@angular/router";
import {EditEmployeeService} from "../edit-employee.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  e: Employee | undefined;
  regPostcode = new RegExp('^\d{5}$');

  constructor(private route: ActivatedRoute,
              private editEmployeeService: EditEmployeeService,
              private router: Router
  ) {

  }

  ngOnInit() {
    this.getEmployeeById();
  }

  getEmployeeById(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.editEmployeeService.getEmployee(id)
      .subscribe(employee => this.e = employee);
  }

  save(): void {
    if (this.e) {
      if(! this.regPostcode.test(this.e.postcode==null?"":this.e.postcode)){
        alert("The postal code must consist of 5 numbers.");
      }
      else {
        this.editEmployeeService.updateEmployee(this.e)
          .subscribe();
        this.router.navigate(['employee']);
      }
    }
  }

  delete(): void {
    if (this.e) {
      this.editEmployeeService.deleteEmployee(this.e)
        .subscribe();
      this.router.navigate(['employee']);
    }
  }
}
