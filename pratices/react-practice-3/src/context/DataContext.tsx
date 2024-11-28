import { ProductContext } from "@common-types/product";
import { createContext, useMemo, useReducer, useState } from "react";
import { productReducer } from "@reducer/productReducer";
import { DataState } from "@common-types/data";
import { CategoryProps } from "@common-types/category";

const initialState: DataState = {
  products: [],
};

const DataContext = createContext<ProductContext>({} as ProductContext);
const DataProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  const [state, dispatch] = useReducer(productReducer, initialState);
  const { products } = state;

  const value = useMemo(() => ({
    products,
    dispatch,
    searchValue,
    setSearchValue,
    categories,
    setCategories,
  }), [products, searchValue]);

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export {DataProvider, DataContext};