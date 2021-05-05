import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private _router: Router, private _route: ActivatedRoute) { }

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

}
