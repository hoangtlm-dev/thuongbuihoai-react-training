import React from "react";
import Icon from "../components/Icon/Icon";
import { users } from "../constants/header";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Icon",
  component: Icon,
};

export function Default() {
  return <Icon username={users.username} avatar={users.avatar} />;
}
