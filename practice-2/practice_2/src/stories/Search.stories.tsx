import React from "react";
import Search from "../components/Search/Search";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Search",
  component: Search,
};

export function Default() {
  return <Search />;
}