export interface ProductProps {
  id: string;
  name: string;
  price: number;
  images: string[];
  quantity: number;
  categoryId: string;
  description: string;
}

export interface ProductItemProps {
  product: {
    id: string;
    images: string[];
  };
}

export interface ProductListProps {
  products: ProductProps[];
}

export interface ProductUpdateProps {
  product: ProductProps;
  setIsReset: Function;
}