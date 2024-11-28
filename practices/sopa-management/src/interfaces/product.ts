export interface Product {
  id: string;
  name: string;
  price: number;
  color: string;
  image: {
    url: string;
    alt: string;
  };
  size: string;
  description?: string;
  quantity: number;
};
