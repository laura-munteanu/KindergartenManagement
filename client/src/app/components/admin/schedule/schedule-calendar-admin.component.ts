import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Schedule } from 'src/app/models/schedule';
import { SchedulesService } from 'src/app/services';

@Component({
  selector: 'km-schedule-calendar-admin',
  templateUrl: './schedule-calendar-admin.component.html',
  styles: [
  ]
})
export class ScheduleCalendarAdminComponent implements OnInit {

  public form: FormGroup;
  public activitiesCalendar: any;
  public groupId: any;
  constructor(
    private _route: ActivatedRoute,
    private _schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params =>{
      this.groupId = params.get('groupId');
      const startTime = '2021-03-02T07:00:00';
      const endTime = '2021-07-02T18:00:00';

      this._schedulesService.getList(this.groupId, startTime, endTime).subscribe(data =>{
        this.activitiesCalendar = data;
        console.log('date recuperate pt grupa: ')
        console.log(this.activitiesCalendar);
      })
    })

  }

  // private createForm(){
  //   this.form = new FormGroup({
  //     activityId : new FormControl(this.schedule.activityId),
  //     teacherId: new FormControl(this.schedule.teacherId),
  //     groupId: new FormControl(this.schedule.groupId),
  //     startTime: new FormControl(this.schedule.startTime),
  //     endTime: new FormControl(this.schedule.endTime)
  //   }) 
  // };

}
