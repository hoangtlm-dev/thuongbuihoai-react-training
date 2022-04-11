import { CardProps } from "../types/card";

const CARD_FREEMIUM: CardProps = {
  value1: "Basic Collections",
  value2: "10 Messages",
  value3: "50 Images per Day",
  title: "FREEMIUM",
  unit: "$",
  price: 0,
  label: "GET STARTED"
}

const CARD_STARTUP: CardProps = {
  value1: "Multiple Collections",
  value2: "100 Messages",
  value3: "100 Images per Day",
  title: "START UP",
  unit: "$",
  price: 9,
  label: "GET STARTED"
}

const CARD_BUSINESS: CardProps = {
  value1: "Unlimited Collections",
  value2: "500 Messages",
  value3: "300 Images per Day",
  value4: "Project Reviews",
  title: "BUSINESS",
  unit: "$",
  price: 29,
  label: "GET STARTED"
}

const CARD_ENTERPRISE: CardProps = {
  value1: "Unlimited Collections",
  value2: "Unlimited Messages",
  value3: "Unlimited Images per Day",
  value4: "Project Reviews",
  title: "ENTERPRISE",
  unit: "$",
  price: 49,
  label: "GET STARTED"
}

const CARD_LIST: CardProps[] = [
  {
    key: "freemium",
    className: "freemium",
    value1: "Basic Collections",
    value2: "10 Messages",
    value3: "50 Images per Day",
    title: "FREEMIUM",
    unit: "$",
    price: 0,
    label: "GET STARTED"
  },
  {
    key: "startup",
    className: "startup",
    value1: "Multiple Collections",
    value2: "100 Messages",
    value3: "100 Images per Day",
    title: "START UP",
    unit: "$",
    price: 9,
    label: "GET STARTED"
  },
  {
    key: "business",
    className: "business",
    value1: "Unlimited Collections",
    value2: "500 Messages",
    value3: "300 Images per Day",
    value4: "Project Reviews",
    title: "BUSINESS",
    unit: "$",
    price: 29,
    label: "GET STARTED"
  },
  {
    key: "enterprise",
    className: "enterprise",
    value1: "Unlimited Collections",
    value2: "Unlimited Messages",
    value3: "Unlimited Images per Day",
    value4: "Project Reviews",
    title: "ENTERPRISE",
    unit: "$",
    price: 49,
    label: "GET STARTED"
  }
]
export { CARD_FREEMIUM, CARD_STARTUP, CARD_BUSINESS, CARD_ENTERPRISE, CARD_LIST}