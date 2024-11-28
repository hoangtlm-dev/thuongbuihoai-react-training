import { Product } from "../interfaces/product";

const MOCK_PRODUCTS: Product[] = [
  {
    name: 'Black shoes',
    price: 87,
    size: 'Small',
    description:
      'Our goal in designing the super-soft Atoms Crew Socks was to provide a seamless match with your Atoms shoes, enhancing your comfort for everyday wear - making them the perfect socks for your everyday shoes.',
    color: 'Black',
    image: {
      url: '/images/products/black-shoes.png',
      alt: 'This is black shoes'
    },
    id: '1',
    quantity: 2
  },
  {
    name: 'Blue shoes',
    price: 45,
    size: 'Medium',
    description:
      'Our goal in designing the super-soft Atoms Crew Socks was to provide a seamless match with your Atoms shoes, enhancing your comfort for everyday wear - making them the perfect socks for your everyday shoes.',
    color: 'Blue',
    image: {
      url: '/images/products/blue-shoes.png',
      alt: 'This is blue shoes'
    },
    id: '2',
    quantity: 1
  }
];

const MOCK_PRODUCT: Product = {
  name: 'Black shoes',
  price: 87,
  size: 'Large',
  description: 'Our goal in designing the super-soft Atoms Crew Socks was to provide a seamless match with your Atoms shoes, enhancing your comfort for everyday wear - making them the perfect socks for your everyday shoes.',
  color: 'Black',
  image: {
    url: '/images/products/black-shoes.png',
    alt: 'This is black shoes'
  },
  id: '1',
  quantity: 3
};

export {
  MOCK_PRODUCTS,
  MOCK_PRODUCT
};
