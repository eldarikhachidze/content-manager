import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {User, UserResponse} from "../interfaces/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseService{

  // getUsers(params: {
  //   data: User[];
  //   order: string;
  //   page: number
  //   limit: number;
  //   search: string;
  // }): Observable<User[]> {
  //   return this.get<User[]>('users/all', params)
  // }
  getUsers(params: any): Observable<UserResponse> {
    return this.get<UserResponse>('users/all', { params });
  }

  deleteItem(id: string): Observable<User> {
    return this.delete<User>(`users/delete/${id}`);
  }

}
