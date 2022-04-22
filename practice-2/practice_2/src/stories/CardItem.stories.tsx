import React from "react";
import CardItem from "../components/Card/CardItem/CardItem";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CardItem",
  component: CardItem,
};

export function Default() {
  return <CardItem />;
}