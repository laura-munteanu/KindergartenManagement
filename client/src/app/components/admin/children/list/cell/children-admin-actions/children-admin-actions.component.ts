import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'km-children-admin-actions',
  templateUrl: './children-admin-actions.component.html',
  styles: [
  ]
})
export class ChildrenAdminActionsComponent implements ICellRendererAngularComp {
  public params: any;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean {
    return false;
  }

  editCellChild() {
    this.params.context.componentParent.editChild(this.params.data.id);

  }

  deleteCellChild() {
    this.params.context.componentParent.deleteChild(this.params.data.id, `${this.params.data.firstName} ${this.params.data.lastName}`);
  }

}
