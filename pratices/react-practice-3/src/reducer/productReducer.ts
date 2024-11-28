import { Action, DataAction, DataState } from "@common-types/data";
import { Product } from "@common-types/product";

const productReducer = (state: DataState, actions: DataAction): DataState => {
  const { action, payload } = actions;
  switch (action) {
    case Action.GetProductSuccess: {
      return { ...state, products: payload as Product[] };
    }
    case Action.CreateProductsSuccess: {
      return { ...state.products, products: state.products.concat(payload as Product) };
    }
    case Action.DeleteProductSuccess: {
      const deleteProduct = state.products.filter(item => item.id != payload)
      return {...state, products: deleteProduct};
    }
    case Action.UpdateProductSuccess: {
      state.products.findIndex(item => item.id == payload);
      return {...state};
    }
    default: {
      return { ...state };
    }
  }
};

export { productReducer };
