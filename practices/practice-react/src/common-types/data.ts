import { Categories } from "./category";
import { Product } from "./product";

export interface DataContextProps {
  products: Product[];
  setProducts: Function;
  searchValue: [] | undefined;
  setSearchValue: Function;
  categories: Categories[];
  setCategories: Function;
}