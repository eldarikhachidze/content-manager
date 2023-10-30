import {Token, User} from "./user";

export interface Login {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: Token;
  error?: any;
  status: number;
}
