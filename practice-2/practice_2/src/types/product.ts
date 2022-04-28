import { ImagesProps } from "./logo";

export interface ProductProps {
  id: string,
  name: string,
  image: ImagesProps;
  product: {}
}

export interface ProductDetailProps {
  id: string,
  params: {},
  image: ImagesProps;
  productId?: string;
}