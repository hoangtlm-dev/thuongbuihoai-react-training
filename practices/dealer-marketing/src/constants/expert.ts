import { Expert } from "@self-types/expert";

const EXPERT_MOCKING: Expert = {
  expertId: "1",
  name: "Matt-Childers",
  slug: "matt-childers",
  info: "DealersLink",
  image: {
    url: "/images/avatar/matt-childers.png",
    alt: "This is image of Mr Matt-Childers",
  },
  description:
    "Brent Albrecht is currently the Vice President of Business Development at Friendemic. Friendemic provides social media and online reputation services for clients and agencies across the globe. Specialties: Marketing Strategy, Product development and launch, Social Media Marketing, Business Development, Lead Generation, Sales Promotion, Digital Marketing, Database Marketing.",
};

const EXPERT_MOCKING_LIST: Expert[] = [
  {
    expertId: "1",
    name: "David Adcock",
    slug: "david-adcock",
    info: "Binary Auto",
    image: {
      url: "/images/avatar/ibrahim-mesbah.png",
      alt: "This is image of Mr adam dennis",
    },
    description:
      " Evaluating OEM Programs and Providing Better Customer Experiences with Ibrahim Mesbah",
  },
  {
    expertId: "2",
    name: "Brent-Albrecht",
    slug: "brent-albrecht",
    info: "Friendemic",
    image: {
      url: "/images/avatar/brent-albrecht.png",
      alt: "This is image of Mr adam-dennis",
    },
    description:
      "Brent Albrecht is currently the Vice President of Business Development at Friendemic. Friendemic provides social media and online reputation services for clients and agencies across the globe. Specialties: Marketing Strategy, Product development and launch, Social Media Marketing, Business Development, Lead Generation, Sales Promotion, Digital Marketing, Database Marketing.",
  },
];

const EXPERT_SECTION = [
  {
    key: "1",
    src: "/images/avatar/ibrahim-mesbah.png",
    alt: "This is image of Mr adam dennis",
    description:
      " Evaluating OEM Programs and Providing Better Customer Experiences with Ibrahim Mesbah",
    srcInfo: "/images/inside-auto.png",
    altInfo: "This is image inside auto",
  },
  {
    key: "2",
    src: "/images/avatar/ilana-shabtay.png",
    alt: "This is image of Mr ilana-shabtay",
    description: " Experimarketing Episode 27: No Inventory? No Problem.",
    srcInfo: "/images/experimaketing.png",
    altInfo: "This is image inside auto",
  },
  {
    key: "3",
    src: "/images/avatar/brent-albrecht.png",
    alt: "This is image of Mr adam dennis",
    description: " Website Clicks?! they`re Still Clickin",
    srcInfo: "/images/experimaketing.png",
    altInfo: "This is image inside auto",
  },
];
export { EXPERT_MOCKING, EXPERT_MOCKING_LIST, EXPERT_SECTION };
