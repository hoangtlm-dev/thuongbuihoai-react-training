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