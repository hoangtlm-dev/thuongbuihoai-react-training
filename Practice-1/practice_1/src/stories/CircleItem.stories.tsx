import React from "react";
import CircleItem from "../components/circleItem/CircleItem";
import { RESULT_FREE, RESULT_TOTAL, RESULT_UNIQUE } from "../constants/result";

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

export function CircleFree() {
  return (
    <CircleItem className="39-75" number1={39} number2={75}
    title="Free downloads" content={RESULT_FREE} />
  );
}

export function CircleUnique() {
  return (
    <CircleItem className="81-15" number1={81} number2={15}
    title="Unique visitors" content={RESULT_UNIQUE} />
  );
}