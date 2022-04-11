import React from "react";
import Card from "../components/card/Card";
import { CARD_FREEMIUM, CARD_STARTUP, CARD_BUSINESS, CARD_ENTERPRISE } from "../constants/card";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Card",
  component: Card,
};

export function CardFreemium() {
  return <Card className="freemium"
      title="FREEMIUM"
      unit="$"
      price={0}
      value1={CARD_FREEMIUM.value1}
      value2={CARD_FREEMIUM.value2}
      value3={CARD_FREEMIUM.value3}
      label="GET STARTED"
    />
}

export function CardStartUp() {
  return <Card className="startup"
      title="STARTUP"
      unit="$"
      price={9}
      value1={CARD_STARTUP.value1}
      value2={CARD_STARTUP.value2}
      value3={CARD_STARTUP.value3}
      label="GET STARTED"
    />
}

export function CardBusiness() {
  return <Card className="business"
      title="BUSINESS"
      unit="$"
      price={29}
      value1={CARD_BUSINESS.value1}
      value2={CARD_BUSINESS.value2}
      value3={CARD_BUSINESS.value3}
      value4={CARD_BUSINESS.value4}
      label="GET STARTED"
    />
}

export function CardEnterprise() {
  return <Card className="enterprise"
      title="ENTERPRISE"
      unit="$"
      price={49}
      value1={CARD_ENTERPRISE.value1}
      value2={CARD_ENTERPRISE.value2}
      value3={CARD_ENTERPRISE.value3}
      value4={CARD_ENTERPRISE.value4}
      label="GET STARTED"
    />
}