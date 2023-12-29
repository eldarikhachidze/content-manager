import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {AstrologySings} from "../interfaces/astrology-sings";

@Injectable({
  providedIn: 'root'
})
export class SingsService extends BaseService {

  update(id: string, sings: AstrologySings): Observable<AstrologySings> {
    return this.put<AstrologySings>(`zodiacos/${id}`, sings)
  }

  getOne(id: string): Observable<AstrologySings> {
    return this.get<AstrologySings>(`zodiacos/${id}`)
  }

  getAllSings(): Observable<AstrologySings[]> {
    return this.get<AstrologySings[]>('zodiacos');
  }

}
