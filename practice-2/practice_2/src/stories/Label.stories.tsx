import React from "react";
import Label from "../components/common/Label/Label";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Label",
  component: Label,
};

export function Default() {
  return <Label value="Filter" className="filter" />;
}