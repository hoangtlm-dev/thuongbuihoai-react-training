import { createContext, useMemo, useState } from "react";
import { ProductContextType, ProductType } from "../types/product";
import useSWR from "swr";
import { PRODUCT_URL } from "../constants/url";
import { getData } from "../helpers/apiHandle";

const ProductContext = createContext<ProductContextType>({} as ProductContextType);
const ProductProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const data = useSWR(PRODUCT_URL, getData<ProductType[]>);
  const products = data.data
  const value = useMemo(() => ({
    products,
    searchValue,
    setSearchValue,
  }), [products, searchValue]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductProvider, ProductContext};