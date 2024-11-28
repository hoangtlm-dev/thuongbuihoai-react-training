// Mocks
import { MOCK_PRODUCTS } from '@mocks/product';

// Interface
import { Product } from '@interfaces/product';

// Helpers
import {
  flattenArray,
  totalPrices
} from '../common';

describe('Test common', () => {
  test('should flatten an array with nested arrays', () => {
    const nestedArray = [[1, 2, 3], [4, 5], [6]];

    const flattened = flattenArray(nestedArray);
    const expected = [1, 2, 3, 4, 5, 6];
    expect(flattened).toEqual(expected);
  });

  test('should return 0 if the carts array is empty', () => {
    const carts: Product[] = [];
    const result = totalPrices(carts);
    expect(result).toBe(0);
  });

  test('should calculate the total prices correctly', () => {
    const carts = MOCK_PRODUCTS;
    const result = totalPrices(carts);
    expect(result).toBe(219);
  });
});
