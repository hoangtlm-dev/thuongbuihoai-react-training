import React from "react";
import Footer from "../components/Footer/Footer";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Footer",
  component: Footer,
};

export function Default() {
  return <Footer />;
}