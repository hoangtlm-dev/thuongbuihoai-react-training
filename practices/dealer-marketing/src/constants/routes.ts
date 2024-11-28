import { RouterType } from "@self-types/routes";

const ROUTER_CONTACT: RouterType[] = [
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

const ROUTER_LIST: RouterType[] = [
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

const ROUTER_SERVICES: RouterType[] = [
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

export { ROUTER_CONTACT, ROUTER_LIST, ROUTER_SERVICES };
