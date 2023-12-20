import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Data} from "@angular/router";
import {Observable} from "rxjs";
import {Category} from "../interfaces/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService extends BaseService {

  create(body: Data): Observable<Category> {
    return this.post<Category>('category', body);
  }

  update(id: string, category: Category): Observable<Category> {
    return this.put<Category>(`category/${id}`, category)
  }

  getOne(id: string): Observable<Category> {
    return this.get<Category>(`category/${id}`)
  }

  getAllCategories(): Observable<Category[]> {
    return this.get<Category[]>('category');
  }

  deleteItem(id: string): Observable<Category> {
    return this.delete<Category>(`category/${id}`);
  }
}

