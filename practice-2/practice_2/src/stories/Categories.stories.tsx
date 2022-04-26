import React from "react";
import Category from "../components/Categories/Categories";
import { DEFAULT_CATEGORY } from "../constants/categories";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Category",
  component: Category,
};

export function Default() {
  return <Category categoriesList={DEFAULT_CATEGORY} />;
}