import React from "react";
import { CircleNumber } from "../components/circles/circleNumber/CircleNumber";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CircleNumber",
  component: CircleNumber,
};

export function Circle_74_98() {
  return <CircleNumber number1={74} number2={98} />;
}

export function Circle_39_75() {
  return <CircleNumber number1={39} number2={75} />;
}

export function Circle_81_15() {
  return <CircleNumber number1={81} number2={15} />;
}