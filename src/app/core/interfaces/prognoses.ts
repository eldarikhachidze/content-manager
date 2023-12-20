import {Zodiaco} from "./zodiac";

export interface Prognoses {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: string;
  title: string;
  description: string;
  zodiacoId: string;
  categoryId: string;
  category?: any;
  zodiaco: Zodiaco;
}

export interface PrognosesResponse<T> {
  data: Prognoses[];
  total: number;
  limit: number;
  page: number;
}
