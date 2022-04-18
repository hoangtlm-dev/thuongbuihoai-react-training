import React from "react";
import Card from "../components/cards/card/Card";
import { CARD_FREEMIUM } from "../constants/card";
import free from "../assets/images/freemium.png"
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Card",
  component: Card,
};

export function CardFreemium() {
  return <Card url={free}
    title="FREEMIUM"
    unit="$"
    price={0}
    value={CARD_FREEMIUM.value}
  />
}