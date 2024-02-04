import {Injectable} from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Blog, PaginatedResponse} from "../interfaces/blogs";

@Injectable({
  providedIn: 'root'
})
export class BlogsService extends BaseService {


  create(formData: FormData): Observable<Blog> {
    return this.post<Blog>('blog/create-blog', formData);
  }


  update(id: string, blog: Blog): Observable<Blog> {
    return this.put(`blog/update-blog/${id}`, blog)
  }

  getOne(id: string): Observable<Blog> {
    return this.get(`blog/get-blog/${id}`)
  }

  getAllBlogs(params = {}): Observable<PaginatedResponse> {
    return this.get<PaginatedResponse>('blog/get-all-blogs', params);
  }

  deleteItem(id: string): Observable<Blog> {
    return this.delete<Blog>(`blog/delete-blog/${id}`);
  }

}
