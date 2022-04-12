import React from "react";
import { Description } from "../components/description/Description";
import { MAIN_TEXT } from "../constants/feature";
import { FEATURE_RESPONSIVE, FEATURE_DIAMOND, FEATURE_LAYERS } from "../constants/feature";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Description",
  component: Description,
};

export function MainText() {
  return (
    <Description className="main">{MAIN_TEXT}</Description>
  );
}

export function Responsive() {
  return (
    <Description className="responsive">{FEATURE_RESPONSIVE}</Description>
  );
}

export function Diamond() {
  return (
    <Description className="diamond">{FEATURE_DIAMOND}</Description>
  );
}

export function Layers() {
  return (
    <Description className="layers">{FEATURE_LAYERS}</Description>
  );
}
