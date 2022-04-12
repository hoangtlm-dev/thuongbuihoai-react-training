import React from "react";
import SectionTitle from "../components/title/SectionTitle";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/SectionTitle",
  component: SectionTitle,
};

export function NamePage() {
  return (
    <SectionTitle className="nav__title">
      <span>HOFMANN</span>
    </SectionTitle>
  );
}

export function MainTitle() {
  return (
    <SectionTitle className="main__title">
      <span>What Makes A Hotel Boutique</span>
    </SectionTitle>
  );
}

export function PlanTitle() {
  return (
    <SectionTitle className="plan__title">
      <span>Subscribing Plans</span>
    </SectionTitle>
  );
}

export function FeatureTitle() {
  return (
    <SectionTitle className="feature-heading__title">
      <span>Feature</span>
    </SectionTitle>
  );
}

export function FeatureText() {
  return (
    <SectionTitle className="feature__text">
      <span>We're taking it to the next level</span>
    </SectionTitle>
  );
}

export function FeatureResponsive() {
  return (
    <SectionTitle className="feature__title">
      <span>Responsive layout</span>
    </SectionTitle>
  );
}

export function FeatureDiamond() {
  return (
    <SectionTitle className="feature__title">
      <span>Pixel perfect</span>
    </SectionTitle>
  );
}

export function FeatureLayers() {
  return (
    <SectionTitle className="feature__title">
      <span>Organized layers</span>
    </SectionTitle>
  );
}

export function Results() {
  return (
    <SectionTitle className="results__title">
      <span>Stunning Results</span>
    </SectionTitle>
  );
}

export function AccountTitle() {
  return (
    <SectionTitle className="account__heading">
      <span>Create An Account</span>
    </SectionTitle>
  );
}
