import React from "react";
import User from "../components/User/User";
import { users } from "../constants/header";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/User",
  component: User,
};

export function Default() {
  return <User username={users.username} avatar={users.avatar} />;
}
