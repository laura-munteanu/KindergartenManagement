import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  url : string = 'http://localhost:5000/api/activities';

  constructor(private _http: HttpClient) { }

  public getList() : Observable<any>{
    return this._http.get(this.url);
  }

  public getById(id: number) : Observable<any>{
    return this._http.get(this.url + '/' + id);
  }

  public AddorUpdate(activity: Activity) : Observable<any>{
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(activity);

    return activity.id > 0 ? this._http.put(this.url, body, { headers }) : this._http.post(this.url, body, { headers });
  }

  public delete (id: number) : Observable<any>{
    return this._http.delete(this.url + '/' + id);
  }
}
