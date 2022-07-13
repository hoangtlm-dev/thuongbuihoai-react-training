import { createContext, useMemo, useState } from "react";
import { Categories } from "@common-types/category";
import { DataContextProps } from "@common-types/data";
import { Product } from "@common-types/product";

const DataContext = createContext<DataContextProps>({} as DataContextProps);
const DataProvider: React.FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  const [searchValue, setSearchValue] = useState<[]>([]);
  const [categories, setCategories] = useState<Categories[]>([]);
  const [products, setProducts] = useState<Product[]>([]);

  const value = useMemo(
    () => ({
      products,
      setProducts,
      searchValue,
      setSearchValue,
      categories,
      setCategories,
    }),
    [products, searchValue]
  );


  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export { DataProvider, DataContext };
