import React from "react";
import ProductList from "../pages/ProductList/ProductList";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/ProductList",
  component: ProductList,
};

export function Default() {
  return <ProductList />;
}