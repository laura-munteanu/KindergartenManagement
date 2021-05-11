import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChildrenGroup } from 'src/app/models';
import { AlertifyService, GroupsService } from 'src/app/services';

@Component({
  selector: 'km-group-admin-edit',
  templateUrl: './group-admin-edit.component.html',
  styles: [
  ]
})
export class GroupAdminEditComponent implements OnInit {
  public isEditMode: boolean = false;
  public title: string = '';
  public buttonText: string = '';

  public form: FormGroup;
  public childrenGroup: ChildrenGroup;

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router,
    private _groupsService: GroupsService,
    private _alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.childrenGroup = {
      id: 0,
      groupName: ''
    };
    this.createForm();

    this._route.paramMap.subscribe(params => {
      const id = params.get('id');

      const childrenGroupId = id == null ? 0 : +id;

      this.isEditMode = childrenGroupId > 0;

      this.title = this.isEditMode ? 'Edit Group' : 'Add Group';
      this.buttonText = this.isEditMode ? 'Save changes' : 'Add Group';

      if(this.isEditMode){
        this._groupsService.getById(childrenGroupId).subscribe(response =>{
          this.childrenGroup = response;
          this.createForm();
        })
      }
    });
  }
  public back() {
    this._router.navigate(['admin', 'groups']);
  }

  public saveChanges(){
    if(this.form.valid){
      const updatedChildrenGroup: ChildrenGroup = {
        id: this.childrenGroup.id,
        groupName: this.form.value.groupName
      };
      this._groupsService.addOrDelete(updatedChildrenGroup).subscribe(response =>{
        if(response > 0){
          this._alertifyService.success(this.isEditMode ? 'The group details were successfully updated!': 'The group was successfully added');
          this._router.navigate(['admin', 'groups']);
        }
        else {
          this._alertifyService.error('An error has occured. Please try again later!');
        }
      });
    }
  }

  private createForm(){
    this.form = new FormGroup({
      groupName: new FormControl(this.childrenGroup.groupName, Validators.required)
    });
  }

}
