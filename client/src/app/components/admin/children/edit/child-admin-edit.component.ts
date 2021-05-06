import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';


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

  private id: number = 0;

  ChildAdminForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    age: [''],
    photo: ['']
  })

  constructor(private _router: Router, private _route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params =>{
      let id = params.get('id');
      this.id = id == null ? 0 : +id;

      this.isEditMode = this.id > 0;

      this.title = this.isEditMode ? 'Edit Child' : 'Add Child';
      this.buttonText = this.isEditMode ? 'Save changes' : 'Add Child';
    } )
  }

  public back(){
    this._router.navigate(['admin', 'children']);
 }

 saveChanges() {
  if (this.ChildAdminForm.valid) {
   console.log(this.ChildAdminForm.value);}
   else console.log('not good');
}

}
