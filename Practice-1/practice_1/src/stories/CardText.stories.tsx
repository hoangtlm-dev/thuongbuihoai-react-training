import React from "react";
import CardText from "../components/card/CardText";
import { CARD_FREEMIUM, CARD_STARTUP, CARD_BUSINESS, CARD_ENTERPRISE } from "../constants/card";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CardText",
  component: CardText
};

export function CardTextFreemium() {
  return (
    <CardText
      value1={CARD_FREEMIUM.value1}
      value2={CARD_FREEMIUM.value2}
      value3={CARD_FREEMIUM.value3}
    />
  );
}

export function CardTextStartUp() {
  return (
    <CardText
      value1={CARD_STARTUP.value1}
      value2={CARD_STARTUP.value2}
      value3={CARD_STARTUP.value3}
    />
  );
}

export function CardTextBusiness() {
  return (
    <CardText
      value1={CARD_BUSINESS.value1}
      value2={CARD_BUSINESS.value2}
      value3={CARD_BUSINESS.value3}
      value4={CARD_BUSINESS.value4}
    />
  );
}

export function CardTextEnterprise() {
  return (
    <CardText
      value1={CARD_ENTERPRISE.value1}
      value2={CARD_ENTERPRISE.value2}
      value3={CARD_ENTERPRISE.value3}
      value4={CARD_ENTERPRISE.value4}
    />
  );
}