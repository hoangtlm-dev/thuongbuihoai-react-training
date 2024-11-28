import { Product } from "./product";

export enum Action {
  GetProductSuccess = "GET_PRODUCT_SUCCESS",
  CreateProductsSuccess = "CREATE_PRODUCT_SUCCESS",
  DeleteProductSuccess = "DELETE_PRODUCT_SUCCESS",
  UpdateProductSuccess = "UPDATE_PRODUCT_SUCCESS",
}

export interface DataState {
  products: Product[];
}

export type DataPayload = Product[] | string | Product

export interface DataAction {
  action: Action;
  payload: DataPayload
}
