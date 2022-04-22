import React from "react";
import Products from "../components/Product/Product";
import { cardImage } from "../constants/card";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Products",
  component: Products,
};

export function Product() {
  return <Products image={cardImage} />;
}