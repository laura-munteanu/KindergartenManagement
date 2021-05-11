import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChildrenGroup } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {
  url:string = 'http://localhost:5000/api/groups';

  constructor(private _http: HttpClient) { }

  getList() : Observable<any>{
    return this._http.get(this.url);
  }

  getById(id: number) : Observable<any>{
    return this._http.get(this.url +'/'+ id);
  }

  addOrDelete(childrenGroup: ChildrenGroup) : Observable<any>{
    const headers = {'content-type': 'application/json'};
    const body = JSON.stringify(childrenGroup);
    return childrenGroup.id > 0 ? this._http.put(this.url, body, { headers }) : this._http.post(this.url, body, { headers })
  }

  delete(id: number) : Observable<any>{
    return this._http.delete(this.url + '/'+ id );
  }
}
