export interface Subscribe {

  id: string;
  email: string;
  active: boolean;
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
}

export interface SubscribersResponse<T> {
  data: Subscribe[];
  total: number;
  limit: number;
  page: number;
}
