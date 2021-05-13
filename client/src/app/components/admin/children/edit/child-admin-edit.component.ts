import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Child } from 'src/app/models';
import { AlertifyService, ChildrenService, GroupsService } from 'src/app/services';


@Component({
  selector: 'km-child-admin-edit',
  templateUrl: './child-admin-edit.component.html',
  styles: [
  ]
})
export class ChildAdminEditComponent implements OnInit {
  public isEditMode: boolean = false;
  public title: string = '';
  public buttonText: string = '';

  public form: FormGroup;
  public child: Child;

  public lstAge = [
    {value: '3', label: '3'},
    {value: '4', label: '4'},
    {value: '5', label: '5'},
    {value: '6', label: '6'}
  ];
  
  public ChildrenGroupId: any;

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute,
    private _childrenService: ChildrenService,
    private _groupsService: GroupsService,
    private _alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.child = {
      id: 0,
      firstName: '',
      lastName: '',
      age: 0,
      groupId: 0,
      photo: ''
    };
    this.createForm();

    this.getGroupId();

    this._route.paramMap.subscribe(params =>{
      const id = params.get('id');
      const childId = id == null ? 0 : +id;

      this.isEditMode = childId > 0;

      this.title = this.isEditMode ? 'Edit Child' : 'Add Child';
      this.buttonText = this.isEditMode ? 'Save changes' : 'Add Child';

      if (this.isEditMode){
        this._childrenService.getById(childId).subscribe(response =>{
          this.child = response;
          this.createForm();
        })
      }
    })
  }

  public back(){
    this._router.navigate(['admin', 'children']);
  }

  saveChanges() {
    if (this.form.valid) {
      const updatedChild : Child = {
        id: this.child.id,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        age: +this.form.value.age,
        groupId: +this.form.value.groupId,
        photo: this.form.value.photo
      };
      this._childrenService.addOrUpdate(updatedChild).subscribe(response => {
        if(response > 0){
          this._alertifyService.success(this.isEditMode ? 'The child details were successfully updated!': 'The child was successfully added');
          this._router.navigate(['admin', 'children']);
        }
        else {
          this._alertifyService.error('An error has occured. Please try again later!');
        }
      });
    }
  } 

  private createForm(){
    this.form = new FormGroup({
      firstName: new FormControl(this.child.firstName, Validators.required),
      lastName: new FormControl(this.child.lastName, Validators.required),
      age: new FormControl(this.child.age > 0 ? String(this.child.age) : '', Validators.required),
      groupId: new FormControl(this.child.groupId > 0 ? String(this.child.groupId) : '',  Validators.required),
      photo: new FormControl(this.child.photo)
    });
  }

  private getGroupId(){
    this._groupsService.getList().subscribe(data => {
    this.ChildrenGroupId = data;
    });
  }

}
