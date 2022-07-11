export interface Categories {
  id: string;
  name: string;
  images: {
    src: string;
    alt: string;
  };
}

export interface CategoryContext {
  searchValue: {} | undefined;
  setSearchValue: Function;
  categories: Categories[];
  setCategories: Function;
}