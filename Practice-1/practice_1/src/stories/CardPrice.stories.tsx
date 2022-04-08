import React from "react";
import { CardPrice } from "../components/card/CardPrice";

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
    <CardPrice children1="$" children2={0} ></CardPrice>
  );
}

export function CardStartUp() {
  return (
    <CardPrice children1="$" children2={9}></CardPrice>
  );
}

export function CardBusiness() {
  return (
    <CardPrice children1="$" children2={29}></CardPrice>
  );
}

export function CardEnterprise() {
  return (
    <CardPrice children1="$" children2={49}></CardPrice>
  );
}