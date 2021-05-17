import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/models';
import { ActivitiesService, AlertifyService } from 'src/app/services';

@Component({
  selector: 'km-activity-admin-edit',
  templateUrl: './activity-admin-edit.component.html',
  styles: [
  ]
})
export class ActivityAdminEditComponent implements OnInit {
  
  public isEditMode: boolean = false;
  public title: string = '';
  public buttonText: string = '';

  public form: FormGroup;
  public activity: Activity;

  public lstColor = [
    {value: '#ebe534', label: 'yellow'},
    {value: '#eb8c34', label: 'orange'},
    {value: '#eb3434', label: 'red'},
    {value: '#28ed43', label: 'green'},
    {value: '#4334eb', label: 'blue'},
    {value: '#d61ac0', label: 'purple'}
  ];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _activitiesService: ActivitiesService,
    private _alertifyService: AlertifyService) { }

  ngOnInit(): void {
    this.activity = {
      id: 0,
      activityName: '',
      inKindergarten: true,
      activityColor: ''
    };

    this.createForm();
    this._route.paramMap.subscribe(params =>{
      const id = params.get('id');
      const activityId = id == null ? 0 : +id;

      this.isEditMode = activityId > 0;

      this.title = this.isEditMode ? 'Edit activity' : 'Add activity ';
      this.buttonText = this.isEditMode ? 'Save changes' : 'Add activity';

      if(this.isEditMode){
        this._activitiesService.getById(activityId).subscribe(data =>{
          this.activity = data;
          this.createForm();
        }) 
      }
    })
  }

  public back(){
    this._router.navigate(['admin', 'activities']);
  }

  public saveChanges(){
    console.log(this.form)

    if(this.form.valid){
      const updatedActivity: Activity = {
        id: this.activity.id,
        activityName: this.form.value.activityName,
        inKindergarten: this.form.value.location == '1' ? true : false,
        activityColor: this.form.value.activityColor
      };
      this._activitiesService.AddorUpdate(updatedActivity).subscribe(data =>{
        if(data > 0){
          this._alertifyService.success(this.isEditMode ? 'The activity details were successfully updated!': 'The activity was successfully added');
          this._router.navigate(['admin', 'activities']);
        }
        else {
          this._alertifyService.error('An error has occured. Please try again later!');
        }
      })
    }
  }

  private createForm(){
    this.form = new FormGroup({
     activityName: new FormControl(this.activity.activityName, Validators.required),
     location: new FormControl(this.activity.inKindergarten ? '1' : '0', Validators.required),
     activityColor: new FormControl(this.activity.activityColor, Validators.required)
    });
  }
}
