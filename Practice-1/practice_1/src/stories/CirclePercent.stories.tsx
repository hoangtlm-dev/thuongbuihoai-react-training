import React from "react";
import { CirclePercent } from "../components/circles/circlePercent/CirclePercent";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CirclePercent",
  component: CirclePercent,
};

export function Circle_74_98() {
  return <CirclePercent className = "74-98" number1={74} number2={98} />;
}

export function Circle_39_75() {
  return <CirclePercent className = "39-75" number1={39} number2={75} />;
}

export function Circle_81_15() {
  return <CirclePercent className = "81-15" number1={81} number2={15} />;
}