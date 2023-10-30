import { Injectable } from '@angular/core';
import {environment} from "../../../enviroments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  post<t>(url: string, body: any): Observable<t>{
    return this.http.post<t>(this.apiUrl + url, body)
  }

  get<t>(url: string, params?:any):Observable<t> {
    return this.http.get<t>(this.apiUrl + url, {params})
  }

  delete<t>(url: string): Observable<t> {
    return this.http.delete<t>(this.apiUrl + url)
  }
  put<t>(url: string, body?: any): Observable<t> {
    return this.http.put<t>(this.apiUrl + url, body)
  }
}
