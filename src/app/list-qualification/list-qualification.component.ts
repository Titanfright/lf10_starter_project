import {Component, OnInit} from "@angular/core";
import {QualificationApiService} from "../QualificationApiService";

@Component({
  selector: 'app-list-qualification',
  templateUrl: '/list-qualification.component.html',
  styleUrls: ['list-qualification.component.css']

  })

export class ListQualificationComponent implements OnInit{

  Qualification: any = [];
  constructor(public callApiService: QualificationApiService ) {}

  ngOnInit() {
   this.storeQualifications();
  }
   storeQualifications() {
    return this.callApiService.getQualifications().subscribe((data: {}) => {
        this.Qualification = data;
      });
  }

  deleteQualification(id: any) {
    if(window.confirm('it is correct, you want to delete that qualification?')) {
      this.callApiService.deleteQualification(id).subscribe((data) => {
          this.storeQualifications();
        })
    }
  }

}
