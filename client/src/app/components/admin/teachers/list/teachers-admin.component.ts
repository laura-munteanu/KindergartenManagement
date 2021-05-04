import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GridOptions } from 'ag-grid-community';
import { TeachersService } from 'src/app/services';
import { TeachersAdminActionsComponent } from './cells/teachers-admin-actions/teachers-admin-actions.component';

@Component({
  selector: 'km-teachers',
  templateUrl: './teachers-admin.component.html',
  styles: []
})
export class TeachersAdminComponent implements OnInit {
  public gridOptions: any = {};
  public lstColumns: any;

  public lstTeachers = [];
  constructor(
    private _router: Router, private _teachersService: TeachersService
  ) {
   }

  ngOnInit(): void {
    this.setGridColumns();
    this.setGridLayout();
    this.getData();

  }

  addTeacher() {
    this._router.navigate(['admin', 'teachers', 'edit', 0]);
  }

  editTeacher(id: number) {
    this._router.navigate(['admin', 'teachers', 'edit', id]);
  }

  deleteTeacher(id: number, name: string) {
    console.log(id);
    console.log(name);
    //todo: show modal with confirmation; after confirmation send delete request to server with the id
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
      domLayout: 'autoHeight',
      columnDefs: this.lstColumns
    };
  }
  
  private setGridColumns() {
    this.lstColumns = [
      { field: 'firstName', 
        headerName: 'Name'},
      { field: 'lastName'},
      { 
        headerName: 'Status',
        valueGetter: (params: any) => params.data.isActive ? 'active' : 'inactive',
        width: 100
      },
      { 
        headerName: 'Actions',
        cellRendererFramework: TeachersAdminActionsComponent,
        width: 200,
        sortable: false
      }
    ];
  }

  private getData(){
    this._teachersService.getList().subscribe(data => {
      this.lstTeachers = data;
    });
  }
}
