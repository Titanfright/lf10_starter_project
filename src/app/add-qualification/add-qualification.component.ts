import {Component, Input, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {QualificationApiService} from "../QualificationApiService";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-add-qualification',
  templateUrl: '/add-qualification.component.html',
  styleUrls: ['/add-qualification.component.css']

  })

export class AddQualificationComponent implements OnInit {

  @Input() qualificationsDetails = {qualification: ''};

  constructor(public router: Router,
              public callApiService: QualificationApiService,
              public httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('http://localhost:4200/header', {observe: "response"})
      .subscribe(data => {
        console.log(data);
    })
  }

  addQualification(dataQualification: any) {
    this.callApiService.createQualification(this.qualificationsDetails)
      .subscribe((data: {}) => {
        this.router.navigate(['/add-qualification']);
      });
  }
  /*onSubmit() {
    this.callApiService.createQualification(this.addQualification)
      .subscribe( data => {
        this.router.navigate(['/qualification-list']);
      });
  } */
}
