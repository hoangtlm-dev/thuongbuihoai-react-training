import React from "react";
import Menu from "../components/Menu/Menu";
import MENU_LIST from "../constants/menu";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Menu",
  component: Menu,
};

export function Default() {
  return <Menu menuList={MENU_LIST} />;
}