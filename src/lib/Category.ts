import { News } from "./News";

export interface Category {
  count: number;
  id: number;
  name: string;
  slug: string;
  news: News[];
  createdAt: string;
  updatedAt: string;
}
