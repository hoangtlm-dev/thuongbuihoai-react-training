import React from "react";
import Title from "../pages/components/Title/Title";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Title",
  component: Title,
};

export function Default() {
  return <Title text="Build Your Pizza" />;
}