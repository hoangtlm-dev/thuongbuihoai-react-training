import React from "react";
import { Link } from "../components/link/Link";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Link",
  component: Link,
};

export function Links() {
  return (
    <Link title="Already Have an account?" href="javascript:void(0)" />
  );
}