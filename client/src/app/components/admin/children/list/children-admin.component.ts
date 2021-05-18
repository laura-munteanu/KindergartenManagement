import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GridOptions } from 'ag-grid-community';
import { Child, ChildrenGroup } from 'src/app/models';
import { AlertifyService, ChildrenService, GroupsService } from 'src/app/services';
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
  public lstChildren: Child[] = [];

  private childrenGroups: ChildrenGroup[] = [];


  constructor(
    private _router: Router, 
    private _childrenService: ChildrenService,
    private _groupsService: GroupsService,
    private _alertifyService: AlertifyService){ }

  ngOnInit(): void {
    this.setGridColumns();
    this.setGridLayout();

    this.getGroups();

  }

  public addChild(){
    this._router.navigate(['admin', 'children', 'edit', 0]);
  }

  public editChild(id: number){
    this._router.navigate(['admin', 'children', 'edit', id]);
  }

  public deleteChild(id: number, name: string){
    this._alertifyService.confirm(`Are you sure you want to delete the following child?<br/><b><i>${name}</i></b>`, ()=>{
      this._childrenService.delete(id).subscribe(data => {
        this._alertifyService.success('The Child was successfully deleted');
        this.getData();
    });
  });

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
         field: 'groupName',
        headerName: 'Group',
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
      for (let i = 0; i < this.lstChildren.length; i++){
        const obj = this.childrenGroups.find(group => group.id == this.lstChildren[i].groupId);
        this.lstChildren[i].groupName = obj ? obj.groupName : '';
      }
    });
  } 

  public getGroups(){
    this._groupsService.getList().subscribe(data => {
      this.childrenGroups = data;
      this.getData();
    });
  }
}
