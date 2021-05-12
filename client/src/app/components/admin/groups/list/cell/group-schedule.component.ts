import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'km-group-schedule',
  templateUrl: './group-schedule.component.html',
  styles: [
  ]
})
export class GroupScheduleComponent implements ICellRendererAngularComp {
  public params: any;
  constructor() { }

  agInit(params: any): void {
    this.params = params;
  }

  refresh(): boolean{
    return false;
  }

  openCellGroupSchedule() {
    this.params.context.componentParent.openGroupSchedule(this.params.data.id);
  }

}
