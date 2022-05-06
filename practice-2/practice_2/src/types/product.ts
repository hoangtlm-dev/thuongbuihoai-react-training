export interface ProductProps {
  product: {
    id: string;
    images: string[];
  };
}

export interface ProductListProps {
  isReset: Boolean;
  setIsReset: Function;
  products: ProductType[];
}

export interface ProductType {
  id: string;
  name: string;
  price: number;
  images: string[];
  quantity: number;
  categoryId: string;
  description: string;
}

export interface ProductPropRouter {
  product: ProductType;
  setIsReset: Function;
}