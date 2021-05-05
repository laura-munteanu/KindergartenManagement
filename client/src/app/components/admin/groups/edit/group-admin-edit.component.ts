import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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

  private id: number = 0;

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params => {
      let id = params.get('id');

      this.id = id == null ? 0 : +id;

      this.isEditMode = this.id > 0;

      this.title = this.isEditMode ? 'Edit Group' : 'Add Group';
      this.buttonText = this.isEditMode ? 'Save changes' : 'Add Group';
    });
  }
  public back() {
    this._router.navigate(['admin', 'groups']);
  }

}
