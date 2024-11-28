import React from "react";
import Form from "../components/form/Form";
import INPUT_LIST from "../constants/input";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Form",
  component: Form,
};

export function Email() {
  return (
    <Form inputList={INPUT_LIST} />
  );
}