import { MenuType } from "@components/common/Menu";
import { Product } from "@interfaces/product";

const SIZE = [
  {
    key: "1",
    label: "Small",
  },
  {
    key: "2",
    label: "Medium",
  },
  {
    key: "3",
    label: "Large",
  }
];

const MENU_HEADER: MenuType[] = [
  {
    key: "men",
    label: "Men",
  },
  {
    key: "women",
    label: "Women",
  },
  {
    key: "accessories",
    label: "Accessories",
  },
  {
    key: "about",
    label: "About",
  },
];

const MENU_PRODUCTS: MenuType[] = [
  {
    key: "Model-000",
    label: "Model-000",
  },
  {
    key: "Model-001",
    label: "Model-001",
  },
  {
    key: "laces",
    label: "Laces",
  },
  {
    key: "masks",
    label: "Masks",
  },
  {
    key: "no-show-socks",
    label: "No-show Socks",
  },
  {
    key: "crew-socks",
    label: "Crew Socks",
  },
  {
    key: "gift-cards",
    label: "Gift Cards",
  },
];

const MENU_SUPPORT: MenuType[] = [
  {
    key: "help-center",
    label: "Help Center",
  },
  {
    key: "FAQs",
    label: "FAQs",
  },
  {
    key: "order",
    label: "Order",
  },
  {
    key: "order-status",
    label: "Order Status",
  },
  {
    key: "returns&exchanges",
    label: "Returns & Exchanges",
  },
  {
    key: "contact-us",
    label: "Contact Us",
  },
];

const MENU_EVERYTHING_ELSE: MenuType[] = [
  {
    key: "community",
    label: "Community",
  },
  {
    key: "why-sopa",
    label: "Why Sopa",
  },
  {
    key: "about",
    label: "About",
  },
  {
    key: "discount-program",
    label: "Discount Program",
  },
  {
    key: "sopa-blog",
    label: "Sopa Blog",
  },
  {
    key: "sopa-ambassadors",
    label: "Sopa Ambassadors",
  },
];

const LIMIT_PRODUCTS = 6;

const INITIAL_PRODUCT: Product = {
  id: "",
  name: "",
  price: 0,
  color: "",
  image: {
    url: "",
    alt: ""
  },
  size: "",
  quantity: 0
}

const STORAGE_KEY = {
  TOKEN: 'token',
};

const CAROUSEL_BULLET = [
  {
    key: '1',
    htmlFor: 'carousel-1',
    className: 'carousel-bullet'
  },
  {
    key: '2',
    htmlFor: 'carousel-2',
    className: 'carousel-bullet'
  },
  {
    key: '3',
    htmlFor: 'carousel-3',
    className: 'carousel-bullet'
  }
];

export {
  CAROUSEL_BULLET,
  SIZE,
  MENU_HEADER,
  MENU_PRODUCTS,
  MENU_SUPPORT,
  MENU_EVERYTHING_ELSE,
  LIMIT_PRODUCTS,
  INITIAL_PRODUCT,
  STORAGE_KEY,
};
