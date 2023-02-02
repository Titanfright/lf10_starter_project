import {Component, OnInit} from "@angular/core";

class Entry {
}

@Component({
  selector: 'app-add-qualification-table',
  templateUrl: '/add-qualification-table.component.html',
  styleUrls: ['add-qualification.component-table.css']

  })

export class AddQualificationTableComponent implements OnInit{

  inputEntry:string='';
  title='add-qualification-table app';
  entries: Entry[] | undefined;

  constructor() {}
  ngOnInit(): void {
    this.entries = [
      {
        content: 'Development',
        completed: false
      },
      {
        content: 'Project Management',
        completed: true
      }
    ]
  }
  toogleEntry(id:number) {
    // @ts-ignore
    this.entries.map((v,i) => {
      //if(i == id) v.completed = !v.completed;
      return v;
    })
  }
  editEntry(id:number) {
    // @ts-ignore
    this.entries = this.entries.filter((v, i) => i !==id);
  }

  deleteEntry(id:number) {
    // @ts-ignore
    this.entries = this.entries.filter((v, i) => i !==id);
  }

  AddEntry(){
      // @ts-ignore
    this.entries.push({
        content:this.inputEntry,
        completed:false
      });
      this.inputEntry="";
  }
}
