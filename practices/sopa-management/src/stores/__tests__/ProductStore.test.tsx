import {
  act,
  renderHook
} from '@testing-library/react';

// Mocks
import { MOCK_PRODUCTS } from '../../__mocks__/product';

// Hooks
import { useProductStore } from '../product';

describe('Test useProductStore', () => {
  test('Initial value of useProductStore', () => {
    const { result } = renderHook(() => useProductStore());

    expect(result.current.products).toEqual([]);
  });

  test('Should change value of products when set products value', () => {
    const { result } = renderHook(() => useProductStore());

    expect(result.current.products).toEqual([]);
    act(() => result.current.setProducts(MOCK_PRODUCTS));
    expect(result.current.products).toEqual(MOCK_PRODUCTS);
  });
});
