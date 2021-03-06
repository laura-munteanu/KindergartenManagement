import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  url:string = 'http://localhost:5000/api/schedules';
  
  constructor(private _http: HttpClient) { }
 
  getById(id: number): Observable<any> {
    return this._http.get(this.url + '/' + id);
  }

  getList(groupId: any, startDate: Date, endDate: Date): Observable<any> {
    let params = new HttpParams();
    params = params.append('groupId', groupId);
    params = params.append('startTime', startDate.toISOString());
    params = params.append('endTime', endDate.toISOString());
    return this._http.get(this.url, {params: params});
  }
}
