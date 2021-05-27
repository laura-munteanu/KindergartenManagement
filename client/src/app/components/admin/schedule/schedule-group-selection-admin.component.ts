import { Component, OnInit } from '@angular/core';
import { ChildrenGroup } from 'src/app/models';
import { GroupsService } from 'src/app/services';

@Component({
  selector: 'km-schedule-group-selection-admin',
  templateUrl: './schedule-group-selection-admin.component.html',
  styles: [
  ]
})
export class ScheduleGroupSelectionAdminComponent implements OnInit {

  public childrenGroups: ChildrenGroup[] = [];

  constructor(
    private _groupsService: GroupsService) { }

  ngOnInit(): void {
    this.getData();
  }

  private getData(){
    this._groupsService.getList().subscribe(data => {
      this.childrenGroups = data;
    })
  }

}
