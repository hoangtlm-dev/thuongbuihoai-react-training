import React from "react";
import FeatureItem from "../components/featureItem/FeatureItem";
import iconResponsive from "../assets/images/icons/responsive.png";
import { FEATURE_RESPONSIVE } from "../constants/feature";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/FeatureItem",
  component: FeatureItem,
};

export function Responsive() {
  return <FeatureItem
    className = "responsive"
    title = "Responsive layout"
    content = {FEATURE_RESPONSIVE}
    icon = {iconResponsive}
    alt = "image responsive"
  />
}