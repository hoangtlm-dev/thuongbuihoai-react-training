import React from "react";
import Icon from "../components/icon/Icon";
import iconResponsive from "../assets/images/icons/responsive.png";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Icon",
  component: Icon,
};

export function Responsive() {
  return <Icon icon={iconResponsive} alt="image responsive" className="responsive" />;
}