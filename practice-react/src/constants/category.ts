import { Categories } from "@common-types/category";

const CATEGORY: Categories = {
  id: "1234",
  name: "Beverages",
  images: {
    src: "@assets/images/icons/beverages.png",
    alt: "This is icon beverages",
  },
};

const CATEGORY_LIST: Categories[] = [
  {
    id: "1234",
    name: "Beverages",
    images: {
      src: "@assets/images/icons/beverages.png",
      alt: "This is icon beverages",
    },
  },
  {
    id: "12345",
    name: "Dairy",
    images: {
      src: "@assets/images/icons/dairy.png",
      alt: "This is icon dairy",
    },
  },
  {
    id: "12345",
    name: "Meat",
    images: {
      src: "@assets/images/icons/meat.png",
      alt: "This is icon meat",
    },
  },
  {
    id: "12345",
    name: "Spices & Herbs",
    images: {
      src: "@assets/images/icons/spices-herbs.png",
      alt: "This is icon spices-herbs",
    },
  },
  {
    id: "12345",
    name: "Stationery",
    images: {
      src: "@assets/images/icons/stationery.png",
      alt: "This is icon stationery",
    },
  },
  {
    id: "12345",
    name: "Costmetic",
    images: {
      src: "@assets/images/icons/costmetic.png",
      alt: "This is icon costmetic",
    },
  },
];

export { CATEGORY, CATEGORY_LIST };
