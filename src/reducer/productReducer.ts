import {
  Action,
  ProductAction,
  ProductState,
  ProductType
} from '../types/product';

const productReducer = (
  state: ProductState,
  actions: ProductAction
): ProductState => {
  const { action, payload } = actions;
  switch (action) {
    case Action.GetProductSuccess: {
      return { ...state, products: payload as ProductType[] };
    }
    case Action.CreateProductsSuccess: {
      return {
        ...state.products,
        products: state.products.concat(payload as ProductType)
      };
    }
    case Action.DeleteProductSuccess: {
      const deleteProduct = state.products.filter(item => item.id != payload);
      return { ...state, products: deleteProduct };
    }
    case Action.UpdateProductSuccess: {
      state.products.findIndex(item => item.id == payload);
      return { ...state };
    }
    default: {
      return { ...state };
    }
  }
};

export { productReducer };
