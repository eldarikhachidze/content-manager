export interface Slider {
  description: string;
  url: string;
  files: string[];
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
  id: number;
}

export interface SliderResponse {
  data: Slider[];
  total: number;
  limit: number;
  page: number;
}
