import { HttpClient } from '@angular/common/http';
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
}
