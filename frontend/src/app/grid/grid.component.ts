import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  columns: any[] = [
    {
        id: 1,
        display: 'First Name',
        variable: 'FirstName',
        filter: 'text',
        message: 'List group item heading'
    },
    {
        id: 2,
        display: 'Last Name',
        variable: 'LastName',
        filter: 'text',
        message: 'List group item heading 2'
    },
    {
        id: 3,
        display: 'Gender',
        variable: 'Gender',
        filter: 'text',
        message: 'List group item heading 3'
    },
    {
        id: 4,
        display: 'Date of Birth',
        variable: 'DOB',
        filter: 'date',
        message: 'List group item heading 4'
    }
];
sorting: any = {
    column: 'FirstName',
    descending: false
};


}
