import { CategoriesProps } from "./categories";

export interface FilterProps {
  categoriesList: CategoriesProps[];
}

export interface FilterByProps {
  filterBy: CategoriesProps[];
}

export interface FilterInputProps {
  categoryId?: string;
}

export interface FilterByCategory {
  setFilterInput: Function;
}