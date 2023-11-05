import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Login, LoginResponse} from "../interfaces/auth";
import {Observable, tap} from "rxjs";
import {User} from "../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService{

  get token(): string | null {
    return localStorage.getItem('token')
  }

  get user(): string | null {
    const user = localStorage.getItem('user')
    return user ? JSON.parse(user): null
  }
  login(payload: Login): Observable<LoginResponse> {
    return this.post<LoginResponse>('auth/sign-in', payload)
      .pipe(
        tap((response: LoginResponse) => {
          this.setToken(response.token.accessToken)
          this.setUser(response.user)
        })
      )
  }

  setToken(token:string) {
    localStorage.setItem('token', token)
  }

  setUser(user: User) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  signOut() {
    localStorage.clear()
  }
}
