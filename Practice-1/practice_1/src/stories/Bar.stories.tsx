import React from "react";
import Bar from "../components/navBar/Bar";
import menuBar from "../assets/images/icons/menuBar.svg"

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Bar",
  component: Bar,
};

export function Default() {
  return <Bar logo={menuBar} />;
}