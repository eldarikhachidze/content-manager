import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {Slider, SliderResponse} from "../interfaces/slider";
import {Data} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SliderService extends BaseService{

  create(body: Data): Observable<Slider> {
    return this.post<Slider>('event-slider', body);
  }


  // update(id: string, blog: Blog): Observable<Blog> {
  //   return this.put(`blog/update-blog/${id}`, blog)
  // }

  // getOne(id: string): Observable<Blog> {
  //   return this.get(`blog/get-blog/${id}`)
  // }
  //
  getAllSliders(): Observable<SliderResponse> {
    return this.get<SliderResponse>('event-slider');
  }
  //
  // deleteItem(id: string): Observable<Blog> {
  //   return this.delete<Blog>(`blog/delete-blog/${id}`);
  // }
}
