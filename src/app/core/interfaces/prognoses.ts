import {Zodiaco} from "./zodiac";
import {Category} from "./category";

export interface Prognoses {
  id: string;
  title: string;
  description: string;
  zodiacoId: number;
  categoryId: number;
  category: Category;
  zodiaco: Zodiaco;
  startDate: string;
  endDate: string;
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
}

export interface PrognosesResponse<T> {
  data: Prognoses[];
  total: number;
  limit: number;
  page: number;
}
