import { CategoriesProps } from "../types/categories";

const DEFAULT_CATEGORY: CategoriesProps[] = [
  {
    id: "1",
    name: "Cakes",
  },
  {
    id: "2",
    name: "Ice Cream"
  }
]

const DEFAULT_FILTERER: CategoriesProps[] = [
  {
    id: "1",
    name: "Cakes",
    count: 1
  },
  {
    id: "2",
    name: "Ice Cream",
    count: 3
  }
]

export { DEFAULT_CATEGORY, DEFAULT_FILTERER }