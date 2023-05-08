import { createContext, useCallback, useMemo, useState } from "react";
import { ProductContextType, ProductType } from "../types/product";
import useSWR from "swr";
import { PRODUCT_URL } from "../constants/url";
import { getData } from "../helpers/apiHandle";
import debounce from "../helpers/debounce";

const valueInitial = {
  product: '',
  brand: '',
  quantity: '',
  price: '',
  type: ''
}

const ProductContext = createContext<ProductContextType>({} as ProductContextType);
const ProductProvider: React.FC<{children: JSX.Element[] | JSX.Element}> = ({ children }) => {
  const [searchValue, setSearchValue] = useState(valueInitial);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const data = useSWR(PRODUCT_URL, getData<ProductType[]>);
  const products = data.data;

  const productList = useMemo(() => {
    return searchValue
      ? products?.filter((product: ProductType) =>
          product.product?.toLowerCase().includes(searchValue.product.toLowerCase()) &&
          product.brand?.toLowerCase().includes(searchValue.brand.toLowerCase()) &&
          product.quantity?.toString().includes(searchValue.quantity) &&
          product.price?.toString().includes(searchValue.price) &&
          product.type?.toLowerCase().includes(searchValue.type.toLowerCase())
        )
      : products;
  }, [products, searchValue]);

  const handleSearch = useCallback(
    async (key: string, value: string) => {
      setIsLoading(!isLoading);
      debounce(() => {
        setIsLoading(isLoading);
        setSearchValue({
          ...searchValue,
          [key]: value
        });
      }, 500);
    },
    [searchValue]
  );

  const value = useMemo(() => ({
    productList,
    searchValue,
    isLoading,
    setIsLoading,
    setSearchValue,
    handleSearch
  }), [products, searchValue]);

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}

export {ProductProvider, ProductContext};
