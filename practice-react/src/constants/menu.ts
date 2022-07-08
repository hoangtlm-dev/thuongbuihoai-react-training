import { MenuType } from "../common-types/menu";

const MENU_LIST: MenuType[] = [
  {
    key: "orders",
    label: "Orders",
  },
  {
    key: "cart",
    label: "Cart",
  },
  {
    key: "contact",
    label: "Contact",
  },
];

const MENU_SERVICE: MenuType[] = [
  {
    key: "email-marketing",
    label: "Email Marketing",
  },
  {
    key: "campaigns",
    label: "Campaigns",
  },
  {
    key: "branding",
    label: "Branding",
  },
  {
    key: "offline",
    label: "Offline",
  },
];

const MENU_ABOUT: MenuType[] = [
  {
    key: "our-story",
    label: "Our Story",
  },
  {
    key: "benefits",
    label: "Benefits",
  },
  {
    key: "team",
    label: "Team",
  },
  {
    key: "careers",
    label: "Careers",
  },
];

const MENU_HELP: MenuType[] = [
  {
    key: "FAQs",
    label: "FAQs",
  },
  {
    key: "contact-us",
    label: "Contact Us",
  },
];

export { MENU_LIST, MENU_SERVICE, MENU_ABOUT, MENU_HELP };
