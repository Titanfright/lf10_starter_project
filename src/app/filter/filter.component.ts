import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {MatTableDataSource} from "@angular/material/table";

const Filter_DATA: filterElement[] = [
  { id: 999, lastName: 'klein', firstName: 'torsten', designation: 'Angular'},
  { id: 998, lastName: 'Myke', firstName: 'Fred', designation: 'Spring Boot'},
  { id: 997, lastName: 'foo', firstName: 'dylen', designation: 'React'},
  { id: 900, lastName: 'sofie', firstName: 'marie', designation: 'C#'},
  { id: 789, lastName: 'mueller', firstName: 'caty', designation: 'D'},
  { id: 234, lastName: 'mueller', firstName: 'caty', designation: 'Spring'},
  { id: 824, lastName: 'mueller', firstName: 'caty', designation: 'Next JS'}

];

export interface filterElement {
  lastName?: string; firstName?: string; id: number; designation?: string;

}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit{

  column: string[] = ['id', 'designation', 'lastName', 'firstName'];
  dataFilter = new MatTableDataSource(Filter_DATA);

  idFilter = new FormControl();
  lastNameFilter = new FormControl();
  firstNameFilter = new FormControl();
  designationFilter = new FormControl();

  filtered = { id: '', designation: '', lastName: '', firstName: ''};
  ngOnInit(): void {
    this.idFilter.valueChanges.subscribe((idFilterVal) => {
      this.filtered['id'] = idFilterVal;
        this.dataFilter.filter = JSON.stringify(this.filtered);
    });
    this.lastNameFilter.valueChanges.subscribe((lastNameFilterval) => {
      this.filtered['lastName'] = lastNameFilterval;
        this.dataFilter.filter = JSON.stringify((this.filtered))
    });
    this.firstNameFilter.valueChanges.subscribe((firstNameFilterval) => {
      this.filtered['firstName'] = firstNameFilterval;
        this.dataFilter.filter = JSON.stringify((this.filtered))
    });
    this.designationFilter.valueChanges.subscribe((designationFilterval) => {
      this.filtered['designation'] = designationFilterval
        this.dataFilter.filter = JSON.stringify((this.filtered))
    });
    this.dataFilter.filterPredicate = this.customFilterPro();
  }
  customFilterPro() {
    const myFilter = function (data: filterElement, filter: string) :boolean {
      let search = JSON.parse(filter);
      // @ts-ignore
      let lastNameFound = data.lastName.toString().trim().toLowerCase().indexOf(search.lastName.toLowerCase()) !== -1;
      // @ts-ignore
      let firstNameFound = data.firstName.toString().trim().toLowerCase().indexOf(search.firstName.toLowerCase()) !== -1;
      let idFound = data.id.toString().trim().indexOf(search.id) !== -1;;
      // @ts-ignore
      let designationFound = data.designation.toString().trim().indexOf(search.lastName.toLowerCase()) !== -1;
      if(search.topFilter) {
        return lastNameFound || firstNameFound || idFound || designationFound
      } else {
        return lastNameFound && idFound && designationFound
      }
    }
    return myFilter;
  }
}
