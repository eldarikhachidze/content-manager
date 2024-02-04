import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../interfaces/user";
import {BaseService} from "./base.service";
import {Subscribe, SubscribersResponse} from "../interfaces/subscribe";

@Injectable({
  providedIn: 'root'
})
export class SubscribeService extends BaseService {


  getSubscribers(params = {}): Observable<SubscribersResponse> {
    return this.get<SubscribersResponse>('subscription/all', params);
  }

  deleteItem(id: string): Observable<Subscribe> {
    return this.delete<Subscribe>(`subscription/${id}`);
  }

  create(body: any): Observable<Subscribe> {
    return this.post<Subscribe>('subscription/subscribe', body)
  }

}
