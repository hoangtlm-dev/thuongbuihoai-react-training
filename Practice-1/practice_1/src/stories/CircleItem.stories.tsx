import React from "react";
import CircleItem from "../components/circleItem/CircleItem";
import { RESULT_TOTAL } from "../constants/result";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CircleItem",
  component: CircleItem,
};

export function CircleTotal() {
  return (
    <CircleItem className="74-98" number1={74} number2={98}
      title="Total conversion" content={RESULT_TOTAL} />
  );
}