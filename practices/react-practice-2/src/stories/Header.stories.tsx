import React from "react";
import Header from "../components/Header/Header";
import { USERS } from "../constants/header";
import url from "../assets/images/js-logo4.png";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Header",
  component: Header,
};

export function Default() {
  return <Header username={USERS.username} image={url} />;
}