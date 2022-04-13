import React from "react";
import Account from "../components/section/account/Account";
import INPUT_LIST from "../constants/input";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Account",
  component: Account,
};

export function Default() {
  return <Account list={INPUT_LIST} />;
}