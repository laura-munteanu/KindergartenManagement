import { Component, Input, OnInit } from '@angular/core';
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
  public currentDate: string;
  public viewMode: string = 'daily';
  public previousBtn: string;
  public currentDayBtn: string;
  public nextBtn: string;

  public activitiesCalendar: any;
  public groupId: any;
  public intervalsOfTime: string[]=[''];
  
  public Days = ['']; 

  constructor(
    private _route: ActivatedRoute,
    private _schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this.getDate();
    this.changeViewMode(this.viewMode);
    this.getTimeIntervals();


    this._route.paramMap.subscribe(params =>{
      this.groupId = params.get('groupId');
      const startTime = '2021-03-02T07:00:00';
      const endTime = '2021-07-02T18:00:00';

      this._schedulesService.getList(this.groupId, startTime, endTime).subscribe(data =>{
        this.activitiesCalendar = data;
      })
    })
  }
  
  public changeViewMode(mode: string) {
    this.viewMode = mode;
    if(this.viewMode == 'daily'){
      this.previousBtn = 'Previuos day';
      this.currentDayBtn = this.currentDate;
      this.nextBtn = 'Next day';

      this.Days=[this.currentDate];
    }
    else {
      this.previousBtn = 'Previous week';
      this.currentDayBtn = '01 May 2021 - 05 May 2021';
      this.nextBtn = 'Next week';

      this.Days=['Monday', ' Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    }
   }


public getDate(){
  let d= new Date();
  d.getFullYear();//Get the year as a four digit number (yyyy)
  d.getMonth();//Get the month as a number (0-11)
  d.getDate();
  this.currentDate = String(d.getDate()+' - ' + (d.getMonth() + 1) + ' - '+ d.getFullYear());
}

getTimeIntervals(){
  let n: any;
    for (var i = 14; i <= 35; i++) {
      n = i%2==0 ? i/2+'.00' : (i+1)/2-1+'.30';
      if(n < 10) {
        n = '0'+n;
      }   
      this.intervalsOfTime.push(n);
    }
 
}
}
