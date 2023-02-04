import {Component, OnInit} from '@angular/core';
import {Employee} from "../Employee";
import {ActivatedRoute} from "@angular/router";
import {EditEmployeeService} from "../edit-employee.service";

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  e: Employee | undefined;

  constructor(private route: ActivatedRoute,
              private editEmployeeService: EditEmployeeService
  ) {

  }

  ngOnInit() {
    this.getEmployeeById();
  }

  getEmployeeById(): void{
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.editEmployeeService.getEmployee(id)
      .subscribe(employee => this.e = employee);
    console.log(id);
  }

  save(): void {
    if (this.e) {
      this.editEmployeeService.updateEmployee(this.e)
        .subscribe();
    }
  }

  delete(): void {
    if (this.e) {
      this.editEmployeeService.deleteEmployee(this.e)
        .subscribe();
    }
  }
}
