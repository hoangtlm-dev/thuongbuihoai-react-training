import { Product } from "@common-types/product";
import iceCreamSundae from "@assets/images/ice-cream-sundae.png";
import beefSteak from "@assets/images/beef-steak.png";

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
      src: iceCreamSundae,
      alt: "This is ice-cream-sundae images",
    },
  }
];

export { PRODUCT_MOCKING, PRODUCT_MOCKING_LIST };
