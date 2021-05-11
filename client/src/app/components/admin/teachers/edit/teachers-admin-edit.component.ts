import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertifyService, TeachersService } from 'src/app/services';
import { Teacher } from 'src/app/models';


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

  public form: FormGroup; 
  public teacher: Teacher;

  constructor(
    private _route: ActivatedRoute, 
    private _router: Router, 
    private _teachersService: TeachersService,
    private _alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.teacher = {
      id: 0,
      firstName: '',
      lastName: '',
      photo: '',
      isActive: true
    };
    this.createForm();

    this._route.paramMap.subscribe(params => {
      const id = params.get('id');

      const teacherId = id == null ?  0 : +id;
      this.isEditMode = teacherId > 0;

      this.title = this.isEditMode ? 'Edit Teacher' : 'Add Teacher';
      this.buttonText = this.isEditMode ? 'Save changes' : 'Add Teacher';

      if (this.isEditMode){
        this._teachersService.getById(teacherId).subscribe(response => {
          this.teacher = response;
          this.createForm();
        });
      }
   });
  }

  public back(){
     this._router.navigate(['admin', 'teachers']);
  }

  public saveChanges(){
    if (this.form.valid) {
      const updatedTeacher: Teacher = {
        id: this.teacher.id,
        firstName: this.form.value.firstName,
        lastName: this.form.value.lastName,
        isActive: this.form.value.status == '1' ? true : false,
        photo: this.form.value.photo
      };
      this._teachersService.addOrUpdate(updatedTeacher).subscribe(data => {
        if (data > 0) {
          this._alertifyService.success(this.isEditMode ? 'The teacher details were successfully updated!': 'The teacher was successfully added');
          this._router.navigate(['admin', 'teachers']);
        }
        else {
          this._alertifyService.error('An error has occured. Please try again later!');
        }
      });
    }
  }

  private createForm(){
    this.form = new FormGroup({
      firstName: new FormControl(this.teacher.firstName, Validators.required),
      lastName: new FormControl(this.teacher.lastName, Validators.required),
      status: new FormControl(this.teacher.isActive ? "1" : "0", Validators.required),
      photo: new FormControl(this.teacher.photo),
    }) 
  };

}
