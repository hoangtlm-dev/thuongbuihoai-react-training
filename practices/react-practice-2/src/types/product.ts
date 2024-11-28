export interface Product {
  id: string;
  name: string;
  price: number;
  images: string[];
  quantity: number;
  categoryId: string;
  description: string;
  product?: {};
}

export interface ProductItemProps {
  product: Product;
}

export interface ProductUpdateProps {
  product: Product;
  setIsReset: Function;
}

export interface ProductListProps {
  products: Product[];
}
