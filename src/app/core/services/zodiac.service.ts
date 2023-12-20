import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {Zodiaco} from "../interfaces/zodiac";

@Injectable({
  providedIn: 'root'
})
export class ZodiacService extends BaseService{

  getAllZodiac(): Observable<Zodiaco[]> {
    return this.get<Zodiaco[]> ('zodiacos');
  }
}
