// Libs
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

// Stores
import { useCartStore } from '@stores/cart';

// Interfaces
import { QuantityType } from '@interfaces/cart';
import {
  MOCK_PRODUCT,
  MOCK_PRODUCTS
} from '@mocks/product';

describe('useCartStore', () => {
  test('Should change value of products when set products value', () => {
    const { result } = renderHook(() => useCartStore());

    expect(result.current.cart).toEqual([]);
    act(() => result.current.setCart(MOCK_PRODUCTS));
    expect(result.current.cart).toEqual(MOCK_PRODUCTS);
  });

  test('should add a product to the cart', () => {
    const { result } = renderHook(() => useCartStore());
    const product = MOCK_PRODUCT;

    act(() => {
      result.current.addToCart(product, 'Small');
    });

    // Check if the cart is updated correctly
    expect(result.current.cart[0].id).toBe(product.id);
    expect(result.current.cart[0].size).toBe('Small');
  });

  test('should add product to cart if it does not already exist', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => {
      result.current.addToCart(MOCK_PRODUCT, 'Small');
    });

    // Check if the quantity is increased for the existing product
    expect(result.current.cart[0].quantity).toBe(4);
  });

  test('should increase product quantity in cart', () => {
    const { result } = renderHook(() => useCartStore());

    useCartStore.getState().updateQuantity('1', QuantityType.increment);
    act(() => result.current.updateQuantity('1', QuantityType.increment));
    expect(useCartStore.getState().updateQuantity('2', QuantityType.increment))
  });

  test('should decrement product quantity in cart', () => {
    const { result } = renderHook(() => useCartStore());

    useCartStore.getState().updateQuantity('2', QuantityType.decrement);
    act(() => result.current.updateQuantity('2', QuantityType.decrement));
    expect(useCartStore.getState().updateQuantity('1', QuantityType.decrement))
  });

  test('should deleteCart is called', () => {
    const { result } = renderHook(() => useCartStore());

    act(() => result.current.deleteProductInCart('1'));

    expect(useCartStore.getState().deleteProductInCart('1'));
  });
});
