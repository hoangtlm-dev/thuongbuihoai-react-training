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
      <p>HOFMANN</p>
    </SectionTitle>
  );
}

export function MainTitle() {
  return (
    <SectionTitle className="main__title">
      <p>What Makes A Hotel Boutique</p>
    </SectionTitle>
  );
}

export function PlanTitle() {
  return (
    <SectionTitle className="plan__title">
      <p>Subscribing Plans</p>
    </SectionTitle>
  );
}

export function FeatureTitle() {
  return (
    <SectionTitle className="feature-heading__title">
      <p>Features</p>
    </SectionTitle>
  );
}

export function FeatureText() {
  return (
    <SectionTitle className="feature__text">
      <p>We're taking it to the next level</p>
    </SectionTitle>
  );
}

export function FeatureResponsive() {
  return (
    <SectionTitle className="feature__title">
      <p>Responsive layout</p>
    </SectionTitle>
  );
}

export function FeatureDiamond() {
  return (
    <SectionTitle className="feature__title">
      <p>Pixel perfect</p>
    </SectionTitle>
  );
}

export function FeatureLayers() {
  return (
    <SectionTitle className="feature__title">
      <p>Organized layers</p>
    </SectionTitle>
  );
}

export function Results() {
  return (
    <SectionTitle className="results__title">
      <p>Stunning Results</p>
    </SectionTitle>
  );
}

export function TotalConversion() {
  return (
    <SectionTitle className="circle__title">
      <p>Total conversion</p>
    </SectionTitle>
  );
}

export function FreeDownloads() {
  return (
    <SectionTitle className="circle__title">
      <p>Free downloads</p>
    </SectionTitle>
  );
}

export function UniqueVisitors() {
  return (
    <SectionTitle className="circle__title">
      <p>Unique visitors</p>
    </SectionTitle>
  );
}

export function AccountTitle() {
  return (
    <SectionTitle className="account__heading">
      <p>Create An Account</p>
    </SectionTitle>
  );
}
