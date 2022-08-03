import { MenuType } from "@common-types/menu";

const MENU_CONTACT: MenuType[] = [
  {
    key: "our-experts",
    label: "Our Experts",
    url: "/expert-panel",
  },
  {
    key: "about",
    label: "About",
    url: "/about-us",
  },
];

const MENU_LIST: MenuType[] = [
  {
    key: "research",
    label: "Research",
    url: "/",
  },
  {
    key: "best-practices",
    label: "Best practice",
    url: "/",
  },
  {
    key: "commentary",
    label: "Commentary",
    url: "/",
  },
  {
    key: "reviews",
    label: "Reviews",
    url: "/",
  },
];

const MENU_SERVICES: MenuType[] = [
  {
    key: "privacy-policy",
    label: "Privacy policy",
    url: "/",
  },
  {
    key: "terms-of-service",
    label: "Terms of service",
    url: "/",
  },
  {
    key: "advertise",
    label: "Advertise",
    url: "/",
  },
];

export { MENU_CONTACT, MENU_LIST, MENU_SERVICES };
