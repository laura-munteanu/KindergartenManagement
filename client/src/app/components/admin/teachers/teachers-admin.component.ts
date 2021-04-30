import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'km-teachers',
  templateUrl: './teachers-admin.component.html',
  styles: []
})
export class TeachersAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  columnDefs = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];


}
