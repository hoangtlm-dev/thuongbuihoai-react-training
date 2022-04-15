import React from "react";
import { CardPrice } from "../components/cards/cardPrice/CardPrice";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CardPrice",
  component: CardPrice
};

export function CardFreemium() {
  return (
    <CardPrice unit="$" price={0} ></CardPrice>
  );
}

export function CardStartUp() {
  return (
    <CardPrice unit="$" price={9}></CardPrice>
  );
}

export function CardBusiness() {
  return (
    <CardPrice unit="$" price={29}></CardPrice>
  );
}

export function CardEnterprise() {
  return (
    <CardPrice unit="$" price={49}></CardPrice>
  );
}