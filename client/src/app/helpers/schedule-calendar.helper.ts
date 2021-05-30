export enum CalendarViewMode {
  Daily = 1,
  Weekly = 2
}

export interface CalendarDate {
  date: Date,
  day: string,
  displayDate: string
}

export interface CalendarDateInterval {
  startDate: CalendarDate,
  endDate: CalendarDate,
  days: CalendarDate[]
}

export class CalendarHelper {
  public static daysOfWeek = ['Monday', ' Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  public static getDates(viewMode: CalendarViewMode): CalendarDateInterval {
     if (viewMode == CalendarViewMode.Daily){
      const currentDate = new Date();

      if (currentDate.getDay() == 0){
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (currentDate.getDay() == 6){
        currentDate.setDate(currentDate.getDate() + 2);
      }

      const calendarDate : CalendarDate = CalendarHelper.getCalendarDateByDate(currentDate);
      return {
        startDate: calendarDate,
        endDate: calendarDate,
        days: [calendarDate]
      };
    }
    else {
      const currentDate = new Date();
      if (currentDate.getDay() == 0){
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (currentDate.getDay() == 6){
        currentDate.setDate(currentDate.getDate() + 2);
      }

      const startDate = new Date(currentDate);
      startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
      const endDate = new Date(currentDate);
      endDate.setDate(endDate.getDate() + 5);

      const workingDaays = [];
      for ( let i = 0; i < 5; i++){
        const workingDate = new Date(currentDate);
        workingDate.setDate(workingDate.getDate() + i);
        workingDaays.push(CalendarHelper.getCalendarDateByDate(workingDate));
      }

      return {
        startDate: CalendarHelper.getCalendarDateByDate(startDate),
        endDate: CalendarHelper.getCalendarDateByDate(endDate),
        days: workingDaays
      };
    }
  }

  public static getCalendarDateByDate(date: Date): CalendarDate {
    return  {
      date: date,
      day: CalendarHelper.daysOfWeek[date.getDay() - 1],
      displayDate: `${CalendarHelper.padNumber(date.getDate())}.${CalendarHelper.padNumber(date.getMonth() + 1)}.${date.getFullYear()}`
    };
  }

  public static padNumber(nb: number): String {
    return nb <= 9 ? `0${nb}` : String(nb);
  }
}