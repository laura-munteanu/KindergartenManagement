import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarDate, CalendarDateInterval, CalendarHelper, CalendarViewMode } from 'src/app/helpers';
import { SchedulesService } from 'src/app/services';

@Component({
  selector: 'km-schedule-calendar-admin',
  templateUrl: './schedule-calendar-admin.component.html',
  styles: [
  ]
})
export class ScheduleCalendarAdminComponent implements OnInit {
  public viewMode: CalendarViewMode;

  public calendarDateInterval: CalendarDateInterval;

  public previousBtnText: string;
  public currentBtnText: string;
  public nextBtnText: string;

  public activitiesCalendar: any;
  public groupId: any;
  public intervalsOfTime: string[] = [];
  public CalendarViewMode = CalendarViewMode;

  constructor(
    private _route: ActivatedRoute,
    private _schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this.changeViewMode(CalendarViewMode.Daily);
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
  
  public changeViewMode(viewMode: CalendarViewMode) {
    this.viewMode = viewMode;

    if (this.viewMode == CalendarViewMode.Daily) {
      this.previousBtnText = 'Previous day';
      this.nextBtnText = 'Next day';
      this.calendarDateInterval = CalendarHelper.getDates(this.viewMode);
      this.currentBtnText = this.calendarDateInterval.startDate.displayDate;
    }
    else {
      this.previousBtnText = 'Previous week';
      this.nextBtnText = 'Next week';
      this.calendarDateInterval = CalendarHelper.getDates(this.viewMode);
      this.currentBtnText = `${this.calendarDateInterval.startDate.displayDate} - ${this.calendarDateInterval.endDate.displayDate}`;
    }
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
