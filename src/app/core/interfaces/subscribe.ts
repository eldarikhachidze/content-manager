export interface Subscribe {
  id: string;
  email: string;
  active: boolean;
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
}

export interface SubscribersResponse {
  data: Subscribe[];
  total: number;
  limit: number;
  page: number;
}
