import React from "react";
import Result from "../components/section/result/Result";
import { RESULT, RESULT_TEXT } from "../constants/result";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Result",
  component: Result,
};

export function Default() {
  return <Result text={RESULT_TEXT} list={RESULT} />
}