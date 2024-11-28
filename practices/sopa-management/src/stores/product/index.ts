import { create } from 'zustand';
import { Product } from '@interfaces/product';

interface ProductType {
  products: Product[];
  setProducts: (value: Product[]) => void;
}

export const useProductStore = create<ProductType>()((set) => ({
  products: [],
  setProducts: (data: Product[]) => set(() => ({ products: data }))
}));
