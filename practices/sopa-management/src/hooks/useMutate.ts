import { useMutation } from 'react-query';

// Constants
import { CART_URL } from '@constants/url';

// Services
import { api } from '@services/APIRequest';
import { Product } from '@interfaces/product';

/**
 * @description Custom hook post product
 */
export const useMutationPostProductToCart = () => {
  return useMutation({
    mutationFn: async (product: Product) =>
      await api.postData(CART_URL, product),
  });
};

/**
 * @description Custom hook edit product
 */
export const useMutationEditProductInCart = () => {
  return useMutation({
    mutationFn: async (product: Product) =>
      await api.putData(`${CART_URL}/${product.id}`, product),
  });
};


/**
 * @description Custom hook delete product
 */
export const useMutationDeleteProduct = () => {
  return useMutation({
    mutationFn: async (id: string) =>
      await api.deleteData(`${CART_URL}/${id}`),
  });
};
