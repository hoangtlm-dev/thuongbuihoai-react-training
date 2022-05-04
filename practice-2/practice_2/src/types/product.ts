import { ImagesProps } from "./logo";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  images: [];
  product: {
    id: string;
    images: string[];
  };
  setProducts?: ({});
}

export interface ProductDetailProps {
  className?: string
}

export interface ProductPropRouter {
  product:
    {
      id: string;
      categoryId: string;
      name: string;
      description: string;
      price: number;
      images: string[];
      quantity: number;
    }
  setIsReset: Function;
}