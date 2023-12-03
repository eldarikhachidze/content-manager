export interface User {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  timeOfBirth: string;
  country: string;
  city: string;
  phoneNumber: number;
  roles: string;
  password: string;
  email: string;
}

export interface Token {
  expiresIn: number;
  accessToken: string;
  refreshToken: string;
}

export interface UserResponse {
  data: User[];
  order: string;
  page: number
  limit: number;
  search: string;
}
