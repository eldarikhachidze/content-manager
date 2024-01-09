import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Data} from "@angular/router";
import {Observable} from "rxjs";
import {Category} from "../interfaces/category";
import {Prognoses, PrognosesResponse} from "../interfaces/prognoses";

@Injectable({
  providedIn: 'root'
})
export class PrognosesService extends BaseService{
  create(body: Data): Observable<Prognoses> {
    return this.post<Prognoses>('articles', body);
  }

  update(id: string, category: Category): Observable<Prognoses> {
    return this.put<Prognoses>(`articles/${id}`, category)
  }

  getOne(id: string): Observable<Prognoses> {
    return this.get<Prognoses>(`articles/${id}`)
  }

  getAllPrognoses(params: {
    limit: number
  }): Observable<PrognosesResponse<Prognoses[]>> {
    return this.get<PrognosesResponse<Prognoses[]>> ('articles', params);
  }

  deleteItem(id: string): Observable<Prognoses> {
    return this.delete<Prognoses>(`articles/${id}`);
  }
}
