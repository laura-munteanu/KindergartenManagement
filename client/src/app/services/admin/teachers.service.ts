import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from 'src/app/models';

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

  addOrUpdate(teacher: Teacher): Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body = JSON.stringify(teacher);
    const url = 'http://localhost:5000/api/teachers';
    return teacher.id > 0 ? this._http.put(url, body, {headers}) : this._http.post(url, body, {headers});
  }

  delete(id: number): Observable<any>{
    return this._http.delete('http://localhost:5000/api/teachers/'+ id);
  }
}
