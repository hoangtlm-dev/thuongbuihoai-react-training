import React from "react";
import Avatar from "../components/Avatar/Avatar";
import { USERS } from "../constants/header";
import url from "../assets/images/appleIceCream.jpg"

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Avatar",
  component: Avatar,
};

export function Default() {
  return <Avatar username={USERS.username} avatar={url} />;
}
