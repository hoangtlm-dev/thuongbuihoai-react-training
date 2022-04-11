import React from "react";
import Header from "../components/header/Header";
import MENU_LIST from "../constants/menu";
import { MAIN_TEXT } from "./Description.stories";
import menuBar from "../assets/images/icons/menuBar.svg"

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Header",
  component: Header,
};

export function Default() {
  return <Header
    children1="HOFMANN"
    children2="What Makes A Hotel Boutique"
    children3="EXPLORE"
    MAIN_TEXT={MAIN_TEXT}
    menuList={MENU_LIST}
    menuBar={menuBar} />;
}
