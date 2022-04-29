import { ImagesProps } from "./logo";

export interface ProductProps {
  image?: ImagesProps;
  product: {}
}

export interface ProductDetailProps {
  id: string,
  params: {},
  image: ImagesProps;
  productId?: string;
}