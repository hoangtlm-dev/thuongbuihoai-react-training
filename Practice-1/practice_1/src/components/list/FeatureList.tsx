import React from "react";
import { FeatureListProps } from "../../types/feature";
import FeatureItem from "../featureItem/FeatureItem";

interface RenderFeature {
  featureList: FeatureListProps[];
}

export default function FeatureList({ featureList }: RenderFeature): JSX.Element {
  function renderFeatureList(list: FeatureListProps[]) {
    return list.map((item) => (
      <FeatureItem
        className = {item.className}
        title = {item.title}
        content = {item.content}
        icon = {item.icon}
        alt = {item.alt} 
      />
    ));
  }
  return (
    <div>{renderFeatureList(featureList)}</div>
  );
}