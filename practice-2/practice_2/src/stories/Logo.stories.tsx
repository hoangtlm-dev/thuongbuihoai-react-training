import React from "react";
import Logo from "../components/Logo/Logo";
import { logos } from "../constants/header";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Logo",
  component: Logo,
};

export function Default() {
  return <Logo href="#" src={logos.src} alt={logos.alt} />;
}