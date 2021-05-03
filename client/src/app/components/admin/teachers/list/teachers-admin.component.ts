import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { TeachersAdminActionsComponent } from './cells/teachers-admin-actions/teachers-admin-actions.component';

@Component({
  selector: 'km-teachers',
  templateUrl: './teachers-admin.component.html',
  styles: []
})
export class TeachersAdminComponent implements OnInit {
  public gridOptions: any = {};
  public lstColumns: any;
  public gridApi: any;

  lstTeachers = [
    {
        "id": 1,
        "firstName": "Teacher",
        "lastName": "gzzuujjh",
        "isActive": true,
        "isDeleted": false
    },
    {
        "id": 2,
        "firstName": "ghj",
        "lastName": "jjgg",
        "isActive": false,
        "isDeleted": false
    }
];

  constructor() { }

  ngOnInit(): void {
    this.setGridColumns();
    this.setGridLayout();
  }

  onGridReady(params: any) {
    this.gridApi = params.api;
  }

  private setGridLayout() {
    this.gridOptions = <GridOptions> {
      defaultColDef: {
        resizable: true,
        sortable: true,
        width: 100,
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
      overlayNoRowsTemplate: 'No teacher found',
      rowData: [],
      domLayout: 'autoHeight'
    };
  }
  
  private setGridColumns() {
    this.lstColumns = [
      { field: 'firstName', headerName: 'Name'},
      { field: 'lastName'},
      { 
        headerName: 'Status',
        valueGetter: (params: any) => params.data.isActive ? 'active' : 'inactive',
        width: 100
      },
      { 
        headerName: 'Actions',
        cellRendererFramework: TeachersAdminActionsComponent,
        width: 200
      }
    ];
  }
}
