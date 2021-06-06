export enum CalendarViewMode {
  Daily = 1,
  Weekly = 2
}

export enum CalendarDateChangeDirection {
  Previous = 1,
  Next = 2
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

  public static getDates(viewMode: CalendarViewMode, currentDate: Date): CalendarDateInterval {
      if (viewMode == CalendarViewMode.Daily){

      if (currentDate.getDay() == 0){
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (currentDate.getDay() == 6){
        currentDate.setDate(currentDate.getDate() + 2);
      }

      const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 7, 0);
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 18, 0);
      return {
        startDate: CalendarHelper.getCalendarDateByDate(startDate),
        endDate: CalendarHelper.getCalendarDateByDate(endDate),
        days: [CalendarHelper.getCalendarDateByDate(startDate)]
      };
    }
    else {
      if (currentDate.getDay() == 0){
        currentDate.setDate(currentDate.getDate() + 1);
      }
      if (currentDate.getDay() == 6){
        currentDate.setDate(currentDate.getDate() + 2);
      }

      const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 7, 0);
      startDate.setDate(startDate.getDate() - startDate.getDay() + 1);
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 18, 0);
      endDate.setDate(endDate.getDate() + 4);

      const workingDays = [];
      for (let i = 0; i < 5; i++){
        const workingDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 7, 0);
        workingDate.setDate(workingDate.getDate() + i);
        workingDays.push(CalendarHelper.getCalendarDateByDate(workingDate));
      }

      return {
        startDate: CalendarHelper.getCalendarDateByDate(startDate),
        endDate: CalendarHelper.getCalendarDateByDate(endDate),
        days: workingDays
      };
    }
  }

  public static getCalendarDateByDate(date: Date): CalendarDate {
    return {
      date: date,
      day: CalendarHelper.daysOfWeek[date.getDay() - 1],
      displayDate: `${CalendarHelper.padNumber(date.getDate())}.${CalendarHelper.padNumber(date.getMonth() + 1)}.${date.getFullYear()}`
    };
  }
  
  public static getNextDates(viewMode: CalendarViewMode, changeDirection: CalendarDateChangeDirection, referenceDate: Date) {
    let nbDays = viewMode == CalendarViewMode.Daily ? 1 : 7;
    nbDays *= changeDirection == CalendarDateChangeDirection.Next ? 1 : -1;

    if (nbDays == -1 && referenceDate.getDay() == 1) {
      nbDays = -3;
    }

    const newReferencetDate = new Date(referenceDate);
    newReferencetDate.setDate(newReferencetDate.getDate() + nbDays);

    return CalendarHelper.getDates(viewMode, newReferencetDate);
  }













  public static padNumber(nb: number): String {
    return nb <= 9 ? `0${nb}` : String(nb);
  }
}
