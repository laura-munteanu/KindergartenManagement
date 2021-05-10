import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(private _http: HttpClient) { }

  getList() : Observable<any>{
    return this._http.get('http://localhost:5000/api/teachers');
  }

  getById(id: number) : Observable<any>{
    return this._http.get('http://localhost:5000/api/teachers/'+ id);
  }

  add(teacher: any): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(teacher);
    return this._http.put("http://localhost:5000/api/teachers", body, {headers} );
  }

  update(teacher: any): Observable<any>{
    const headers = {'content-type': 'application/json'}  
    const body = JSON.stringify(teacher);
    return this._http.put("http://localhost:5000/api/teachers", body, {headers} );
  }

  delete(id: number): Observable<any>{
    return this._http.delete('http://localhost:5000/api/teachers/'+ id);
  }
}
