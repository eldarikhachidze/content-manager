import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Blog} from "../interfaces/blogs";
import {Event} from "../interfaces/events";

@Injectable({
  providedIn: 'root'
})
export class EventsService extends BaseService {


  create(formData: FormData): Observable<Event> {
    return this.post<Event>('events', formData);
  }


  update(id: string, event: Event): Observable<Blog> {
    return this.put(`events/${id}`, event)
  }

  getOne(id: string): Observable<Event> {
    return this.get<Event>(`events/${id}`)
  }

  getAllEvents(): Observable<Event> {
    return this.get<Event>('');
  }

  deleteItem(): Observable<Event> {
    return this.delete<Event>(`events/`);
  }

}
