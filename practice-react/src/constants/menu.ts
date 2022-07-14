import { MenuType } from "../common-types/menu";

const MENU_LIST: MenuType[] = [
  {
    key: "orders",
    label: "Orders",
    url: "/",
  },
  {
    key: "cart",
    label: "Cart",
    url: "/",
  },
  {
    key: "contact",
    label: "Contact",
    url: "/",
  },
];

const MENU_SERVICE: MenuType[] = [
  {
    key: "email-marketing",
    label: "Email Marketing",
    url: "/",
  },
  {
    key: "campaigns",
    label: "Campaigns",
    url: "/",
  },
  {
    key: "branding",
    label: "Branding",
    url: "/",
  },
  {
    key: "offline",
    label: "Offline",
    url: "/",
  },
];

const MENU_ABOUT: MenuType[] = [
  {
    key: "our-story",
    label: "Our Story",
    url: "/",
  },
  {
    key: "benefits",
    label: "Benefits",
    url: "/",
  },
  {
    key: "team",
    label: "Team",
    url: "/",
  },
  {
    key: "careers",
    label: "Careers",
    url: "/",
  },
];

const MENU_HELP: MenuType[] = [
  {
    key: "FAQs",
    label: "FAQs",
    url: "/",
  },
  {
    key: "contact-us",
    label: "Contact Us",
    url: "/",
  },
];

export { MENU_LIST, MENU_SERVICE, MENU_ABOUT, MENU_HELP };
