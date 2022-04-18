import React from "react";
import { FeatureProps } from "../../../types/features";
import Icon from "../../icon/Icon";
import FeatureList from "../../list/featureList/FeatureList";
import SectionTitle from "../../title/SectionTitle";
import "./feature.css"

export default function Feature({
  list,
  imageDesktop
}: FeatureProps): JSX.Element {
  return (
    <section className="feature__img">
      <div className="container">
        <div className="feature__heading">
          <SectionTitle className="feature-heading__title">Features</SectionTitle>
          <SectionTitle className="feature__text">We're taking it to the next level</SectionTitle>
        </div>
        <div className="feature">
          <div className="feature__list">
            <FeatureList featureList={list}></FeatureList>
          </div>
          <figure className="feature__img--desktop">
            <Icon icon={imageDesktop} alt = "images computer" className="desktop" />
          </figure>
        </div>
      </div>
    </section>
  );
}