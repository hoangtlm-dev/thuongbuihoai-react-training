import React from "react";
import FilterBy from "../components/Selects/FilterBy/FilterBy";
import { DEFAULT_FILTERER } from "../constants/categories";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/FilterBy",
  component: FilterBy,
};

export function Default() {
  return <FilterBy filterBy={DEFAULT_FILTERER} />;
}