import React from "react";
import CardText from "../components/cards/cardText/CardText";
import { CARD_FREEMIUM } from "../constants/card";

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
    <CardText value={CARD_FREEMIUM.value} />
  );
}