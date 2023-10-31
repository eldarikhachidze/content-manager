
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  limit: number;
  page: number;
}
export interface Blog {
  id?: number;
  image: string;
  title: string;
  description: string
}
