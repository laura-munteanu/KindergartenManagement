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
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  editCellTeacher() {
    this.params.context.componentParent.editTeacher(this.params.data.id);

  }

  deleteCellTeacher() {
    this.params.context.componentParent.deleteTeacher(this.params.data.id, `${this.params.data.firstName} ${this.params.data.lastName}`);
  }

}
