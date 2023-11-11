import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User, UserResponse} from "../interfaces/user";
import {BaseService} from "./base.service";
import {Subscribe, SubscribersResponse} from "../interfaces/subscribe";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService extends BaseService{


  getSubscribers(data: any): Observable<SubscribersResponse<Subscribe[]>> {
    return this.get<SubscribersResponse<Subscribe[]>>('subscription/all', { data });
  }

  deleteItem(id: string): Observable<User> {
    return this.delete<User>(`subscription/${id}`);
  }

  create (body: any): Observable<Subscribe> {
    return this.post<Subscribe>('subscription/subscribe', body)
  }

  update(id: string, data: any): Observable<User> {
    return this.put<User>(`subscription/${id}`, data);
  }
}
