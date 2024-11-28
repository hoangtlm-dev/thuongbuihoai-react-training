import { CategoryProps } from "./category";

export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  quantity: number;
  categoryId: string;
  description: string;
  product?: {};
}

export interface ProductContext {
  products: Product[];
  dispatch: Function,
  searchValue: string;
  setSearchValue: Function;
  categories: CategoryProps[];
  setCategories: Function;
}