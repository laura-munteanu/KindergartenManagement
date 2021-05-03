import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'km-teachers-admin-actions',
  templateUrl: './teachers-admin-actions.component.html',
  styles: [
  ]
})
export class TeachersAdminActionsComponent implements ICellRendererAngularComp {
  public params: any;

  constructor() { }

  agInit(params: any): void {
    console.log(params);
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

}
