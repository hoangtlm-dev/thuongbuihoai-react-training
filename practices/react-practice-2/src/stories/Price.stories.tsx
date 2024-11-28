import React from "react";
import Price from "../pages/components/Price/Price";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Price",
  component: Price,
};

export function Default() {
  return <Price value="55000" />;
}