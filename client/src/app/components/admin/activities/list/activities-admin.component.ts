import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GridOptions } from 'ag-grid-community';
import { ActivitiesAdminActionsComponent } from './cell/activities-admin-actions.component';
import { ActivitiesService, AlertifyService } from 'src/app/services';

@Component({
  selector: 'km-activities-admin',
  templateUrl: './activities-admin.component.html',
  styles: [
  ]
})
export class ActivitiesAdminComponent implements OnInit {

  public gridOptions: any;
  public lstColumns: any;
  public lstActivities = [];

  public lstColor = [
    {value: '#ebe534', label: 'yellow'},
    {value: '#eb8c34', label: 'orange'},
    {value: '#eb3434', label: 'red'},
    {value: '#28ed43', label: 'green'},
    {value: '#4334eb', label: 'blue'},
    {value: '#d61ac0', label: 'purple'}
  ];

  constructor(
    private _activitiesService: ActivitiesService,
    private _router: Router,
    private _alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.setGridColumns();
    this.setGridLayout();
    this.getData();
  }

  public addActivity(){
    this._router.navigate(['admin', 'activities', 'edit', 0]);
  }

  public editActivity(id: number){
    this._router.navigate(['admin', 'activities', 'edit', id]);
  }

  public deleteActivity(id: number, name: string){

  }

  private setGridColumns(){
    this.lstColumns = [
      {
        field: 'activityName',
        headerName: 'Activity'
      },
      {
        headerName: 'Location',
        valueGetter: (params: any) => params.data.inKindergarten ? 'in kindergarten' : 'outside the kindergarten',
        width: 200,
      },
      {
        field: 'colorValue',
        headerName: 'Color',
        valueGetter: (params: any) => {
          const obj = this.lstColor.find((item: any) => item.value == params.data.activityColor);
          if (obj) {
            return obj.label;
          }
          return '';
        },
        cellStyle: (params: any) => {
          const obj = this.lstColor.find((item: any) => item.value == params.data.activityColor);
          if (obj) {
            return {color: 'black', backgroundColor: obj.value};
          }
          return null;
      },
        width: 150,
      },
      { 
        headerName: 'Actions',
        cellRendererFramework: ActivitiesAdminActionsComponent,
        width: 200,
        sortable: false
      }
    ]
  }

  private setGridLayout(){
    this.gridOptions = <GridOptions>{
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
      overlayNoRowsTemplate: 'No activities found',
      domLayout: 'autoHeight',
      columnDefs: this.lstColumns
    }
  }

  private getData(){
    this._activitiesService.getList().subscribe(data => {
      this.lstActivities = data;
    });
  }
}
