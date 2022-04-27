import { ImagesProps } from "./logo";

export interface ProductProps {
  id: string,
  image: ImagesProps;
}

export interface ProductDetailProps {
  image: ImagesProps;
  productId?: string;
}