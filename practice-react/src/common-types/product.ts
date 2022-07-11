import { Categories } from "./categoryList";

export interface Product {
  productId: string;
  categoryId: string;
  productName: string;
  originalPrice: {
    value: number;
    currency: string;
  };
  discountPrice: {
    value: number;
    currency: string;
  };
  offerQuantity: string;
  offer: boolean;
  bestSelling: boolean;
  popular: boolean;
  images: {
    src: string;
    alt: string;
  }
}

export interface ProductProps {
  product?: Product;
}