import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Observable} from "rxjs";
import {Blog, PaginatedResponse} from "../interfaces/blogs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class BlogsService extends BaseService{


  // create(formData: FormData): Observable<Blog> {
  //   return this.post<Blog>('blog/create-blog', formData);
  // }
  create(title: string, description: string, file: File) {
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('files', file);

  return this.post<any>('blog/create-blog', formData);
}

  // create(blog: Blog): Observable<Blog> {
  //   return this.post<Blog>('blog/create-blog', blog);
  // }

  getAllBlogs(): Observable<PaginatedResponse<Blog[]>> {
    return this.get<PaginatedResponse<Blog[]>>('blog/get-all-blogs');
  }

  deleteItem(id: string): Observable<Blog> {
    return this.delete<Blog>(`blog/delete-blog/${id}`);
  }

}
