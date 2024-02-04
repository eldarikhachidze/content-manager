export interface PaginatedResponse {
  data: Blog[];
  total: number;
  limit: number;
  page: number;
}

export interface Blog {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: string;
  title: string;
  description: string;
  files: string[];
}
