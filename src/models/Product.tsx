import { Category } from "../enums/category";

export interface Product {
  id: string;
  title: string;
  image: string;
  price: number;
  description: string;
  category: Category.MensClothing | Category.WomensClothing;
}
