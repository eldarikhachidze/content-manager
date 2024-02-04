import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {User, UserResponse} from "../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{



  getUser(id: string):Observable<User> {
    return this.get<User>(`users/${id}`);
  }
  getUsers(params = {}): Observable<UserResponse> {
    return this.get<UserResponse>('users', params);
  }

  deleteItem(id: string): Observable<User> {
    return this.delete<User>(`users/delete/${id}`);
  }

  update(id: string, data: any): Observable<User> {
    return this.put<User>(`users/update/${id}`, data);
  }

}
