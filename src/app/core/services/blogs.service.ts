import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Blog, PaginatedResponse} from "../interfaces/blogs";

@Injectable({
  providedIn: 'root'
})
export class BlogsService extends BaseService{


  create(blog: Blog): Observable<Blog> {
    return this.post<Blog>('blog/create-blog', blog);
  }

  getAllBlogs(): Observable<PaginatedResponse<Blog>> {
    return this.get<PaginatedResponse<Blog>>('blog/get-all-blogs');
  }

}
