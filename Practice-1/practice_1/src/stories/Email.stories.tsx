import React from "react";
import Email from "../components/email/Email";
import { FOOTER_TEXT } from "../constants/footer";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Email",
  component: Email,
};

export function MainText() {
  return (
    <Email footerText={FOOTER_TEXT} />
  );
}