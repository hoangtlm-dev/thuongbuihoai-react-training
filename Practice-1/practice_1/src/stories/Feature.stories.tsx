import React from "react";
import Feature from "../components/section/feature/Feature";
import { FEATURE } from "../constants/feature";
import imageDesktop from "../assets/images/computer.png";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Feature",
  component: Feature,
};

export function Default() {
  return <Feature list={FEATURE} imageDesktop = {imageDesktop} />
}