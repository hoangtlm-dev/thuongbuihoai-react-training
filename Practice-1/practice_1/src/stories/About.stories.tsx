import React from "react";
import About from "../components/about/About";
import ABOUT_US from "../constants/about";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/About",
  component: About,
};

export function AboutUs() {
  return <About aboutUs={ABOUT_US} />;
}