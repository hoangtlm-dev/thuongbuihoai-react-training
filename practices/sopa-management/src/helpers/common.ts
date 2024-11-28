// Interfaces
import { Product } from '@interfaces/product';

// Flattens an array of arrays into a single array
export const flattenArray = <T>(pages: T[][]): T[] => {
  const result: T[] = [];
  pages.forEach((page) => {
    result.push(...page);
  });

  return result;
};

// Calculate the total price
export const totalPrices = (carts: Product[]) => {
  const subTotals = carts.map((item: Product) => item.quantity * item.price);

  const total = subTotals.reduce(
    (totalPrice: number, cartItem: number) => totalPrice + cartItem,
    0
  );

  return total;
};
