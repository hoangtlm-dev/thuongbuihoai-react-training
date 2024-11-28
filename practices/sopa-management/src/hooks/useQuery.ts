import {
  useInfiniteQuery,
  useQuery
} from 'react-query';
import { AxiosError } from 'axios';

// Constants
import { QUERY_KEYS } from '@constants/keyQuery';
import {
  ACCOUNT_URL,
  CART_URL,
  PRODUCT_URL
} from '@constants/url';
import {
  INITIAL_PRODUCT,
  LIMIT_PRODUCTS
} from '@constants/common';

// Interfaces
import { Product } from '@interfaces/product';
import { Account } from '@interfaces/account';

// Services
import { api } from '@services/APIRequest';

// Stores
import { useProductStore } from '@stores/product';
import { useAuthenticationStore } from '@stores/login';

// Helpers
import { flattenArray } from '@helpers/common';

/**
 * @description Fetch product by id
 * @param { string } id
 * @returns
 */
export const useFetchProductDetail = (id?: string) => {
  const { data, ...rest } = useQuery<Product, AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCT_DETAIL + id],
    queryFn: async () => await api.getData(`${PRODUCT_URL}/${id}`),
    refetchOnWindowFocus: false
  });

  return {
    data: data || INITIAL_PRODUCT,
    ...rest
  };
};

/**
 * @description custom hook to get product with show more
 */
export const useInfiniteProducts = () => {
  const { setProducts } = useProductStore();
  const limit = LIMIT_PRODUCTS;

  const { data, ...rest } =  useInfiniteQuery<Product[], AxiosError>({
    queryKey: [QUERY_KEYS.PRODUCTS],
    queryFn: ({ pageParam = 1 }) => api.getData(`${PRODUCT_URL}?_limit=${limit}&_page=${pageParam}`),
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length + 1;
      return lastPage?.length > 0 && lastPage?.length === LIMIT_PRODUCTS
        ? nextPage
        : undefined;
    },
    onSuccess: ({ pages }) => {
      const result = flattenArray(pages);
      setProducts(result);
    },
    refetchOnWindowFocus: false
  });

  return {
    data: data?.pages || [],
    ...rest
  }
};

/**
 * @description Fetch user
 * @returns
 */
export const useFetchUser = () => {
  const { setAccounts } = useAuthenticationStore();

  return useQuery<Account[], AxiosError>({
    queryKey: [QUERY_KEYS.ACCOUNTS],
    queryFn: () => api.getData(ACCOUNT_URL),
    onSuccess: (data) => setAccounts(data),
    refetchOnWindowFocus: false
  });
};

/**
 * @description Fetch cart product
 * @returns
 */
export const useFetchCartProduct = () => {
  return useQuery<Product[], AxiosError>({
    queryKey: [QUERY_KEYS.CARTS],
    queryFn: () => api.getData(CART_URL),
    refetchOnWindowFocus: false
  });
};
