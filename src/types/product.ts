export interface ProductType {
  id?: string;
  productImage: {
    url: string;
    alt: string;
  };
  product?: string;
  status?: boolean;
  type?: string;
  quantity?: number;
  brandImage: {
    url: string;
    alt: string;
  };
  brand: string;
  price: number;
}

export interface ProductState {
  products: ProductType[];
}

export enum Action {
  GetProductSuccess = "GET_PRODUCT_SUCCESS",
  CreateProductsSuccess = "CREATE_PRODUCT_SUCCESS",
  DeleteProductSuccess = "DELETE_PRODUCT_SUCCESS",
  UpdateProductSuccess = "UPDATE_PRODUCT_SUCCESS",
}

export type ProductPayload = ProductType[] | string | ProductType

export interface ProductAction {
  action: Action;
  payload: ProductPayload
}

export interface ProductContextType {
  productList?: ProductType[];
  searchValue: {
    product: string;
    brand: string;
    quantity: string;
    price: string
  };
  setSearchValue: Function;
  isLoading: boolean;
  setIsLoading: Function;
  handleSearch: (key: string, value: string) => {}
}
