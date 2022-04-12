import React from "react";
import FeatureItem from "../components/featureItem/FeatureItem";
import iconResponsive from "../assets/images/icons/responsive.png";
import iconDiamond from "../assets/images/icons/diamond.png";
import iconLayers from "../assets/images/icons/layers.png";
import { FEATURE_RESPONSIVE, FEATURE_DIAMOND, FEATURE_LAYERS, FEATURE } from "../constants/feature";

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

export function Diamond() {
  return <FeatureItem
    className = "diamond"
    title = "Pixel perfect"
    content = {FEATURE_DIAMOND}
    icon = {iconDiamond}
    alt = "image diamond"
  />
}

export function Layers() {
  return <FeatureItem
    className = "layers"
    title = "Organized layers"
    content = {FEATURE_LAYERS}
    icon = {iconLayers}
    alt = "image layers"
  />
}