import React from "react";
import MENU_LIST from "../constants/menu";
import Navigation from "../components/navigation/Menu";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Navigation",
  component: Navigation,
};

export function Default() {
  return <Navigation menuList={MENU_LIST} />;
}
