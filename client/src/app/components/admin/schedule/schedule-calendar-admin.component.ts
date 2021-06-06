import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarDate, CalendarDateInterval, CalendarHelper, CalendarViewMode, CalendarDateChangeDirection } from 'src/app/helpers';
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
  public CalendarDateChangeDirection = CalendarDateChangeDirection;

  constructor(
    private _route: ActivatedRoute,
    private _schedulesService: SchedulesService) { }

  ngOnInit(): void {
    this.changeViewMode(CalendarViewMode.Daily);
    this.getTimeIntervals();

    this._route.paramMap.subscribe(params =>{
      this.groupId = params.get('groupId');
      this.getActivities();
    })
  }
  
  public changeViewMode(viewMode: CalendarViewMode) {
    this.viewMode = viewMode;

    if (this.viewMode == CalendarViewMode.Daily) {
      this.previousBtnText = 'Previous day';
      this.nextBtnText = 'Next day';
    }
    else {
      this.previousBtnText = 'Previous week';
      this.nextBtnText = 'Next week';
    }
    this.calendarDateInterval = CalendarHelper.getDates(this.viewMode, new Date());
    this.setCurrentBtnText();
    this.getActivities();
   }

  private setCurrentBtnText(){
    if (this.viewMode == CalendarViewMode.Daily) {
      this.currentBtnText = this.calendarDateInterval.startDate.displayDate;
    }
    else {
      this.currentBtnText = `${this.calendarDateInterval.startDate.displayDate} - ${this.calendarDateInterval.endDate.displayDate}`;
    }
  }

  public changePeriod(changeDirection: CalendarDateChangeDirection){
    this.calendarDateInterval = CalendarHelper.getNextDates(this.viewMode, changeDirection, this.calendarDateInterval.startDate.date);
    this.setCurrentBtnText();
    this.getActivities();
   } 

  private getActivities(){
    if (this.groupId > 0){
      this._schedulesService.getList(this.groupId, this.calendarDateInterval.startDate.date, this.calendarDateInterval.endDate.date).subscribe(data =>{
       this.activitiesCalendar = data;
     });
    }
  }

  public getTimeIntervals(){
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
