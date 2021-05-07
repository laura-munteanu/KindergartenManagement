import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeachersService } from 'src/app/services';


@Component({
  selector: 'km-teachers-admin-edit',
  templateUrl: './teachers-admin-edit.component.html',
  styles: [
  ]
})
export class TeachersAdminEditComponent implements OnInit {

  public isEditMode: boolean = false;
  public title: string = '';
  public buttonText: string = '';

  private id: number = 0;
  public TeachersAdminForm: FormGroup; 
  public teacher: any;


  constructor(private _route: ActivatedRoute, private _router: Router, private fb: FormBuilder, private _teachersService: TeachersService) { }

  ngOnInit(): void {

    this.createForm();

    this._route.paramMap.subscribe(params => {
      let id = params.get('id');

      this.id = id == null ?  0 : +id;

      this.isEditMode = this.id > 0;

      this.title = this.isEditMode ? 'Edit Teacher' : 'Add Teacher';
      this.buttonText = this.isEditMode ? 'Save changes' : 'Add Teacher';
     
      // this._teachersService.getById(this.id).subscribe(
      //   response => {
      //     this.teacher = response;
      //   }
      // )
     
   });
  }

  public back(){
     this._router.navigate(['admin', 'teachers']);
  }

  public createForm(){
    this.TeachersAdminForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      status: [''],
      photo: ['']
    }) 
  };

  public saveChanges(){
  if (this.TeachersAdminForm.valid) {
    console.log(this.TeachersAdminForm.value);}
    else console.log('not good');
  }

}
