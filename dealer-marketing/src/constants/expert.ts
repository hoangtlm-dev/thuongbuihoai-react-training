import { Expert } from "@common-types/expert";

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
      url: "/images/avatar/david-adcock.png",
      alt: "This is image of Mr adam-dennis",
    },
    description:
      "Brent Albrecht is currently the Vice President of Business Development at Friendemic. Friendemic provides social media and online reputation services for clients and agencies across the globe. Specialties: Marketing Strategy, Product development and launch, Social Media Marketing, Business Development, Lead Generation, Sales Promotion, Digital Marketing, Database Marketing.",
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
export { EXPERT_MOCKING, EXPERT_MOCKING_LIST };
