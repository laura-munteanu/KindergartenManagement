import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { AlertifyService, GroupsService } from 'src/app/services';
import { GroupScheduleComponent } from './cell/group-schedule.component';

import { GroupsAdminActionsComponent } from './cell/groups-admin-actions.component';

@Component({
  selector: 'km-groups',
  templateUrl: './groups-admin.component.html',
  styles: [
  ]
})
export class GroupsAdminComponent implements OnInit {
  public gridOptions: any = {};
  public lstColumns: any;

  public lstChildrenGroups = [];

  constructor(
    private _route: Router, 
    private _groupsService: GroupsService,
    private _alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.setGridColumns();
    this.setGridLayout();
    this.getData();
  }

  addChildrenGroup(){
    this._route.navigate(['admin', 'groups', 'edit', 0]);
  }

  editChildrenGroup(id: number){
    this._route.navigate(['admin', 'groups', 'edit', id]);
  }

  deleteChildrenGroup(id:number, name: string){
    this._alertifyService.confirm(`Are you sure you want to delete the following group?<br/><b><i>${name}</i></b>`,()=>{
      this._groupsService.delete(id).subscribe(data =>{
        this._alertifyService.success('the group was successfully deleted');
        this.getData();
      });
    });
  }

  openGroupSchedule(id: number) {
    this._route.navigate(['dashboard']);
  }


  private setGridColumns(){
    this.lstColumns = [
      { field: 'groupName', 
        headerName: 'Group Name'
      },
      { 
        headerName: 'Responsible Teacher'
      },
      { 
        headerName: 'Number Students'
      },
      { 
        headerName: 'Schedule',
        cellRendererFramework: GroupScheduleComponent,

      },
      { headerName: 'Actions',
        cellRendererFramework: GroupsAdminActionsComponent,
        width: 200,
        sortable: false
      }
    ];

  }
  private setGridLayout(){
    this.gridOptions = <GridOptions> {
      defaultColDef: {
        resizable: true,
        sortable: true,
        width: 200,
        filterParams: {selectAllOnMiniFilter: true}
      },
      context: {
        componentParent: this
      },
      suppressRowClickSelection: true,
      pagination: true,
      paginationPageSize: 25,
      suppressMenuHide: true,
      suppressDragLeaveHidesColumns: true,
      overlayNoRowsTemplate: 'No groups found',
      domLayout: 'autoHeight',
      columnDefs: this.lstColumns
    };
  }
  private getData(){
    this._groupsService.getList().subscribe(data => {
      this.lstChildrenGroups = data;
    });
  }

}
