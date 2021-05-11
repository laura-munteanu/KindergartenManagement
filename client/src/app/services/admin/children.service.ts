import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Child } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ChildrenService {
  url: string = 'http://localhost:5000/api/children';
  constructor(private _http: HttpClient) { }

  getList() : Observable<any>{
    return this._http.get(this.url);
  }

  getById(id: number) : Observable<any>{
    return this._http.get(this.url +'/'+ id);  
  }

  addOrDelete(child: Child) : Observable<any>{
    const headers = { 'content-type': 'application/json'};
    const body = JSON.stringify(child);
    
    return child.id > 0 ? this._http.put(this.url, body, { headers }) : this._http.post(this.url, body, { headers }); 
  }

  delete(id: number) : Observable<any>{
    return this._http.delete(this.url +'/'+ id);
  }
}


