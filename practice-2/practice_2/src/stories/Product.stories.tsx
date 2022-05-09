import React from "react";
import ProductItem from "../components/ProductItem/ProductItem";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/ProductItem",
  component: ProductItem,
};

export function Default() {
  return (
    <ProductItem product={{
      id: "",
      images: []
    }} />
  );
}