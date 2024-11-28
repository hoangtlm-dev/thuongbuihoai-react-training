import { Product } from "@common-types/product";
import url from "../../assets/images/products/black-forest-cake.jpg";

const PRODUCT_MOCKING: Product = {
  id: "1",
  categoryId: "1651924356334",
  name: "Cheese cake",
  price: 20,
  quantity: 5,
  description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  images: [
    url
  ]
}

const PRODUCT_MOCKING_LIST: Product[] = [
  {
    id: "1",
    categoryId: "1651924356334",
    name: "Cheese cake",
    price: 20,
    quantity: 5,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    images: [
      "/src/assets/images/products/cheese-cake.jpg",
      "/src/assets/images/products/cheese-cake.jpg",
      "/src/assets/images/products/cheese-cake.jpg"
    ]
  },
  {
    id: "2",
    categoryId: "1651924356334",
    name: "Amaretti Cookie",
    price: 10,
    quantity: 5,
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    images: [
      "/src/assets/images/products/cheese-cake.jpg",
      "/src/assets/images/products/cheese-cake.jpg",
      "/src/assets/images/products/cheese-cake.jpg"
    ]
  }
]

export { PRODUCT_MOCKING, PRODUCT_MOCKING_LIST };
