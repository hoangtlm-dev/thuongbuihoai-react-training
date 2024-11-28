import { CardProps } from "../types/card";
import freemium from "../assets/images/freemium.png";
import startup from "../assets/images/startup.png";
import business from "../assets/images/business.png";
import enterprise from "../assets/images/enterprise.png";

const CARD_FREEMIUM: CardProps = {
  url: freemium,
  value: ["Basic Collections", "10 Messages", "50 Images per Day"],
  title: "FREEMIUM",
  unit: "$",
  price: 0
}

const CARD_STARTUP: CardProps = {
  url: startup,
  value: ["Multiple Collections", "100 Messages", "100 Images per Day"],
  title: "START UP",
  unit: "$",
  price: 9
}

const CARD_BUSINESS: CardProps = {
  url: business,
  value: ["Unlimited Collections", "500 Messages", "300 Images per Day", "Project Reviews"],
  title: "BUSINESS",
  unit: "$",
  price: 29
}

const CARD_ENTERPRISE: CardProps = {
  url: enterprise,
  value: ["Unlimited Collections", "Unlimited Messages", "Unlimited Images per Day", "Project Reviews"],
  title: "ENTERPRISE",
  unit: "$",
  price: 49
}

const CARD_LIST: CardProps[] = [
  {
    key: "freemium",
    url: freemium,
    value: ["Basic Collections", "10 Messages", "50 Images per Day"],
    title: "FREEMIUM",
    unit: "$",
    price: 0,
  },
  {
    key: "startup",
    url: startup,
    value: ["Multiple Collections", "100 Messages", "100 Images per Day"],
    title: "START UP",
    unit: "$",
    price: 9,
  },
  {
    key: "business",
    url: business,
    value: ["Unlimited Collections", "500 Messages", "300 Images per Day", "Project Reviews"],
    title: "BUSINESS",
    unit: "$",
    price: 29,
  },
  {
    key: "enterprise",
    url: enterprise,
    value: ["Unlimited Collections", "Unlimited Messages", "Unlimited Images per Day", "Project Reviews"],
    title: "ENTERPRISE",
    unit: "$",
    price: 49,
  }
]
export { CARD_FREEMIUM, CARD_STARTUP, CARD_BUSINESS, CARD_ENTERPRISE, CARD_LIST}