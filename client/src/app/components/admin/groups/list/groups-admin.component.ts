import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { GroupsService } from 'src/app/services';

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

  constructor(private _route: Router, private _groupsService: GroupsService) { }

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
    //todo: show modal with confirmation; after confirmation send delete request to server with the id
  }


  private setGridColumns(){
    this.lstColumns = [
      { field: 'groupName', 
        headerName: 'Group Name'
      },
      { 
        headerName: 'Actions',
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
        width: 150,
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