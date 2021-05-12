import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'km-activities-admin-actions',
  templateUrl: './activities-admin-actions.component.html',
  styles: [
  ]
})
export class ActivitiesAdminActionsComponent implements ICellRendererAngularComp {
  public params: any;

  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }
  refresh(): boolean{
    return false;
  }

  editCellActivity(){
    this.params.context.componentParent.editActivity(this.params.data.id);
  }

  deleteCellActivity(){
    this.params.context.componentParent.deleteActivity(this.params.data.id, this.params.data.activitytName);
  }

}
