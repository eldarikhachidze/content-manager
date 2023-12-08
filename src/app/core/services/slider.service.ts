import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {Slider, SliderResponse} from "../interfaces/slider";
import {Data} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SliderService extends BaseService {

  create(body: Data): Observable<Slider> {
    return this.post<Slider>('event-slider', body);
  }

  update(id: string, slider: Slider): Observable<Slider> {
    return this.put<Slider>(`event-slider/${id}`, slider)
  }

  // getOne(id: string): Observable<Blog> {
  //   return this.get(`blog/get-blog/${id}`)
  // }
  //
  getAllSliders(): Observable<SliderResponse> {
    return this.get<SliderResponse>('event-slider');
  }

  deleteItem(id: string): Observable<Slider> {
    return this.delete<Slider>(`event-slider/${id}`);
  }
}
