import React from "react";
import InputSearch from "components/InputSearch/InputSearch";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/InputSearch",
  component: InputSearch,
};

export function Default(setFilterInput: Function) {
  return <InputSearch setFilterInput={setFilterInput} />;
}