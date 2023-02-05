import {Component, OnInit} from '@angular/core';
import {QualificationApiService} from "../QualificationApiService";
import {ActivatedRoute, Router} from "@angular/router";
import {Qualification} from "../Qualification";

@Component({
  selector: 'app-edit-qualification',
  templateUrl: './edit-qualification.component.html',
  styleUrls: ['./edit-qualification.component.css']
})
export class EditQualificationComponent implements OnInit{

  id = this.actRoute.snapshot.params['id'];
  qualificationData: any = {};
  q: Qualification | undefined;
  constructor(public callApiService: QualificationApiService,
              public actRoute: ActivatedRoute,
              public router: Router)  {}
  ngOnInit() {
  this.callApiService.getQualificationById(this.id).subscribe((data: {}) => {
    this.qualificationData = data;
  })
  }

  editQualification() {
    if(window.confirm('it is correct, you want to edit that qualification?')) {
      this.callApiService.editQualification(this.id, this.qualificationData).subscribe(data => {
          this.router.navigate(['/list-qualification'])
        })
    }
  }

}
