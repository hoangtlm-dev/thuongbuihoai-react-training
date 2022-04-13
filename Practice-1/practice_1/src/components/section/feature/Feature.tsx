import React from "react";
import { FeatureListProps } from "../../../types/feature";
import Icon from "../../icon/Icon";
import FeatureList from "../../list/featureList/FeatureList";
import SectionTitle from "../../title/SectionTitle";
import "./feature.css"

export interface FeatureProps {
  headingTitle: string;
  text: string;
  list: FeatureListProps[];
  imageDesktop: string;
}

export default function Feature({
  headingTitle,
  text,
  list,
  imageDesktop
}: FeatureProps): JSX.Element {
  return (
    <section className = "feature__img">
      <div className="container">
        <div className = "feature__heading">
          <SectionTitle className = "feature-heading__title"><span>{headingTitle}</span></SectionTitle>
          <SectionTitle className = "feature__text"><span>{text}</span></SectionTitle>
        </div>
        <div className="feature">
          <div className = "feature__list">
            <FeatureList featureList={list}></FeatureList>
          </div>
          <figure className = "feature__img--desktop">
            <Icon icon={imageDesktop} alt = "images computer" className = "desktop" />
          </figure>
        </div>
      </div>
    </section>
  );
}