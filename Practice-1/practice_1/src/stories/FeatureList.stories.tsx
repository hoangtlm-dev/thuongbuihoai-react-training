import React from "react";
import FeatureList from "../components/list/featureList/FeatureList";
import { FEATURE } from "../constants/feature";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/FeatureList",
  component: FeatureList,
};

export function FeatureLists() {
  return <FeatureList featureList={FEATURE} ></FeatureList>
}