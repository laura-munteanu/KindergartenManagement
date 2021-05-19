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
  
  constructor(
    private _route: ActivatedRoute,
    private _schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this._route.paramMap.subscribe(params =>{
      const id = params.get('id');
      const scheduleId = id == null ? 0 : +id;

      this._schedulesService.getById(scheduleId).subscribe(data =>{
        this.activitiesCalendar = data;
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
