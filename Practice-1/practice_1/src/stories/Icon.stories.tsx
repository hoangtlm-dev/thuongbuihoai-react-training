import React from "react";
import Icon from "../components/icon/Icon";
import iconResponsive from "../assets/images/icons/responsive.png";
import iconDiamond from "../assets/images/icons/diamond.png";
import iconLayers from "../assets/images/icons/layers.png";
import imageDesktop from "../assets/images/computer.png";

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

export function Diamond() {
  return <Icon icon={iconDiamond} alt="image diamond" className="diamond" />;
}

export function Layers() {
  return <Icon icon={iconLayers} alt="image layers" className="layers" />;
}

export function Desktop() {
  return <Icon icon={imageDesktop} alt="image desktop" className="desktop" />;
}