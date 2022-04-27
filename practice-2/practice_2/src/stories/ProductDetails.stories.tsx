import React from "react";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import { cardImage } from "../constants/card";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/ProductDetails",
  component: ProductDetails,
};

export function Product() {
  return <ProductDetails image={cardImage} />;
}