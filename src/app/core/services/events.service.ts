import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Blog} from "../interfaces/blogs";
import {Event, EventsResponse, EventSubscribe, EventSubscribeResponse} from "../interfaces/events";

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

  getAllEvents(): Observable<EventsResponse> {
    return this.get<EventsResponse>('events');
  }

  deleteItem(id: string): Observable<Event> {
    return this.delete<Event>(`events/${id}`);
  }

  getEventSubscribe(): Observable<EventSubscribeResponse> {
    return this.get<EventSubscribeResponse>('events-subscription')
  }

  deleteEventSubscribe(id: string): Observable<EventSubscribe> {
    return this.delete<EventSubscribe>(`events-subscription/${id}`);
  }

}
