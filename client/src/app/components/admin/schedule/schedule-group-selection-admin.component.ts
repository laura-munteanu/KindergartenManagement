import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private _groupsService: GroupsService,
    private _router: Router,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  public selectGroup(groupId: number){
    
    this._router.navigate(['admin','schedule', groupId]);

  }

  private getData(){
    this._groupsService.getList().subscribe(data => {
      this.childrenGroups = data;
    })
  }

}
