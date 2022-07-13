import { Product } from "@common-types/product";
import iceCreamSundae from "@assets/images/ice-cream-sundae.png";

const PRODUCT_MOCKING: Product = {
  productId: "16466545464646547",
  categoryId: "1651454657522",
  productName: "Ice Cream Sundae",
  productDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie ultrices donec pulvinar quis est bibendum suspendisse viverra.",
  productQuantity: 5,
  originalPrice: {
    value: 20,
    currency: "$",
  },
  discountPrice: {
    value: 20,
    currency: "$",
  },
  offerQuantity: "3kg",
  offer: false,
  bestSelling: true,
  popular: false,
  images: {
    src: iceCreamSundae,
    alt: "This is ice-cream-sundae images",
  },
};
const PRODUCT_MOCKING_LIST: Product[] = [
  {
    productId: "16466545464646547",
    categoryId: "1651454657522",
    productName: "Ice Cream Sundae",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie ultrices donec pulvinar quis est bibendum suspendisse viverra.",
    productQuantity: 5,
    originalPrice: {
      value: 20,
      currency: "$",
    },
    discountPrice: {
      value: 20,
      currency: "$",
    },
    offerQuantity: "3kg",
    offer: false,
    bestSelling: true,
    popular: false,
    images: {
      src: "/src/assets/images/ice-cream-sundae.png",
      alt: "This is ice-cream-sundae images",
    },
  },
  {
    productId: "1646654668992646547",
    categoryId: "1651924356334",
    productName: "Beef-Steak",
    productDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam molestie ultrices donec pulvinar quis est bibendum suspendisse viverra.",
    productQuantity: 9,
    originalPrice: {
      value: 50,
      currency: "$",
    },
    discountPrice: {
      value: 50,
      currency: "$",
    },
    offerQuantity: "5kg",
    offer: false,
    bestSelling: false,
    popular: true,
    images: {
      src: "/src/assets/images/beef-steak.png",
      alt: "This is beef-steak images",
    },
  },
];

export { PRODUCT_MOCKING, PRODUCT_MOCKING_LIST };
