import { CategoryType } from "@common-types/categoryList";
import iconBeverages from "@assets/images/icons/beverages.png";
import iconDairy from "@assets/images/icons/dairy.png";
import iconMeat from "@assets/images/icons/meat.png";
import iconSpicesHerbs from "@assets/images/icons/spices-herbs.png";
import iconStationery from "@assets/images/icons/stationery.png";
import iconCostmetic from "@assets/images/icons/costmetic.png";

const CATEGORY: CategoryType = {
  key: "beverages",
  src: iconBeverages,
  text: "Beverages",
  alt: "This is icon beverages",
};

const CATEGORY_LIST: CategoryType[] = [
  {
    key: "beverages",
    src: iconBeverages,
    text: "Beverages",
    alt: "This is icon beverages",
  },
  {
    key: "dairy",
    src: iconDairy,
    text: "Dairy",
    alt: "This is icon dairy",
  },
  {
    key: "meat",
    src: iconMeat,
    text: "Meat",
    alt: "This is icon meat",
  },
  {
    key: "spices-herbs",
    src: iconSpicesHerbs,
    text: "Spices & Herbs",
    alt: "This is icon spices-herbs",
  },
  {
    key: "stationery",
    src: iconStationery,
    text: "Stationery",
    alt: "This is icon stationery",
  },
  {
    key: "costmetic",
    src: iconCostmetic,
    text: "Costmetic",
    alt: "This is icon costmetic",
  },
];

export { CATEGORY, CATEGORY_LIST };
