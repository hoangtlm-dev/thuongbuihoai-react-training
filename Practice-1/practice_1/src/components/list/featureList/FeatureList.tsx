import React from "react";
import { FeatureListProps } from "../../../types/feature";
import { RenderFeature } from "../../../types/featureList";
import FeatureItem from "../../featureItem/FeatureItem";

export default function FeatureList({ featureList }: RenderFeature): JSX.Element {
  function renderFeatureList(list: FeatureListProps[]) {
    return list.map((item) => (
      <FeatureItem
        key={item.key}
        className={item.className}
        title={item.title}
        content={item.content}
        icon={item.icon}
        alt={item.alt} 
      />
    ));
  }

  return (
    <div>{renderFeatureList(featureList)}</div>
  );
}