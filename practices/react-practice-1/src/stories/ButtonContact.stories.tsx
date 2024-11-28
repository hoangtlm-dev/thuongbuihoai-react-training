import React from "react";
import ButtonContactItem from "../components/button/ButtonContactItem";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/ButtonContactItem",
  component: ButtonContactItem
};

export function ButtonContactItems() {
  return <ButtonContactItem title="pinterest" className="pinterest" />
}