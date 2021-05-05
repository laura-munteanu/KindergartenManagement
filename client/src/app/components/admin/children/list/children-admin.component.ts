import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GridOptions } from 'ag-grid-community';
import { ChildrenService } from 'src/app/services';
import { ChildrenAdminActionsComponent } from './cell/children-admin-actions/children-admin-actions.component';

@Component({
  selector: 'km-children-admin',
  templateUrl: './children-admin.component.html',
  styles: [
  ]
})
export class ChildrenAdminComponent implements OnInit {
  public gridOptions: any = {};
  public lstColumns: any;
  public lstChildren = [];

  constructor(private _router: Router, private _childrenService: ChildrenService) { }

  ngOnInit(): void {
    this.setGridColumns();
    this.setGridLayout();
    this.getData();
  }

  public addChild(){
    this._router.navigate(['admin', 'children', 'edit', 0]);
  }

  public editChild(id: number){
    this._router.navigate(['admin', 'children', 'edit', id]);
  }

  public deleteChild(id: number, name: string){

  }

  private setGridColumns() {
    this.lstColumns = [
      {
        field: 'firstName',
        headerName: 'First Name'
      },
      {
        field: 'lastName',
        headerName: 'Last Name'
      },
      {
        field: 'age',
        headerName: 'Age'
      },
      { 
        headerName: 'Actions',
        cellRendererFramework: ChildrenAdminActionsComponent,
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
      overlayNoRowsTemplate: 'No children found',
      domLayout: 'autoHeight',
      columnDefs: this.lstColumns
    }
  }

  private getData(){
    this._childrenService.getList().subscribe(data => {
      this.lstChildren = data;
    })
  }

}
