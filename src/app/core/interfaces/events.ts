import {User} from "./user";

export interface Event {
  id: string;
  name: string;
  location: string;
  description: string;
  organizedBy: string;
  price: string;
  startDate: string;
  endDate: string;
  files: string[];
  deletedAt?: any;
  createdAt: string;
  updatedAt: string;
}

export interface EventsResponse {
  data: Event[];
  total: number;
  limit: number;
  page: number;
}

export interface EventSubscribe {
  createdAt: string;
  updatedAt: string;
  deletedAt?: any;
  id: string;
  userId: number;
  eventId: number;
  user: User;
  event: Event;
}

export interface EventSubscribeResponse {
  data: EventSubscribe[];
  total: number;
  limit: number;
  page: number;
}
