import React from "react";
import CircleList from "../components/list/circleList/CircleList";
import { RESULT } from "../constants/result";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CircleList",
  component: CircleList,
};

export function CircleTotal() {
  return (
    <CircleList circleList={RESULT}  />
  );
}