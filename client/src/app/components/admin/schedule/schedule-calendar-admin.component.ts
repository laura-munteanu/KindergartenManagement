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
  public intervalsOfTime = ['07:00', '07:30','08:00', '08:30','09:00', '09:30'];
  
  public dailyMode: boolean = true;
  public Days = ['Monday', ' Tuesday', 'Wednesday', 'Thursday', 'Friday']; 

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
        console.log(this.intervalsOfTime)
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
