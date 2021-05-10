import { HttpBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TeachersService } from 'src/app/services';
import { ControllersService } from 'ag-grid-community';


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
     
      if (this.isEditMode){
        this._teachersService.getById(this.id).subscribe(
        response => {
          this.teacher = response;
          console.log("get by id:"+ JSON.stringify(this.teacher))
          this.populateTeacherForm();
          // this._teachersService.update(this.id, this.teacher).subscribe(data => {
          // console.log("sent "+JSON.stringify(this.id, this.teacher));

          // });

        });
      }
   });
  }

  public createForm(){
    this.TeachersAdminForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      status: [''],
      // photo: ['']
    }) 
  };

  public populateTeacherForm() {
    this.TeachersAdminForm.patchValue({
      id: this.id,
      firstName: this.teacher.firstName,
      lastName: this.teacher.lastName,
      status: this.teacher.status,
      photo: this.teacher.photo
    })
  }

  public addNewTeacher(){
    this._teachersService.add(this.TeachersAdminForm.value).subscribe(data => {
      this._router.navigate(['admin', 'teachers']);
    });
  }

  public updateTeacher(){
    console.log(this.TeachersAdminForm.value);

    this._teachersService.update(this.TeachersAdminForm.value).subscribe(data => {
     // this._router.navigate(['admin', 'teachers']);
    console.log("sent "+ JSON.stringify( this.TeachersAdminForm.value));
     });
  }

  public back(){
     this._router.navigate(['admin', 'teachers']);
  }


  public statusTeacher(e: any){
    console.log("radio button  "+ e.target.value);
  } 

  public saveChanges(){
    if (this.TeachersAdminForm.valid) {
      if (this.isEditMode){
        this.updateTeacher();
      }
      else {
        this.addNewTeacher();
      }
    }
  }

}
