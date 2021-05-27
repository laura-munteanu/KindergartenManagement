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
  endDate: CalendarDate
}

export class CalendarHelper {
  public static getDates(viewMode: CalendarViewMode): CalendarDateInterval {
    const daysOfWeek = ['Monday', ' Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    // if (viewMode == CalendarViewMode.Daily){
      const currentDate = new Date();
      const calendarDate : CalendarDate = {
        date: currentDate,
        day: daysOfWeek[currentDate.getDay() - 1],
        displayDate: `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`
      };

      return {
        startDate: calendarDate,
        endDate: calendarDate
      };
    // }

  }
}