import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'km-groups-admin-actions',
  templateUrl: './groups-admin-actions.component.html',
  styles: [
  ]
})
export class GroupsAdminActionsComponent implements ICellRendererAngularComp {

  public params: any;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean {
    return false;
  }

  editCellChildrenGroup() {
    this.params.context.componentParent.editChildrenGroup(this.params.data.id);

  }

  deleteCellChildrenGroup() {
    this.params.context.componentParent.deleteChildrenGroup(this.params.data.id, `${this.params.data.firstName} ${this.params.data.lastName}`);
  }
}
