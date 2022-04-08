import React from "react";
import CardTitle from "../components/title/CardTitle";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CardTitle",
  component: CardTitle,
};

export function Freemium() {
  return (
    <CardTitle className="name">
      <span>Freemium</span>
    </CardTitle>
  );
}

export function StartUp() {
  return (
    <CardTitle className="name">
      <span>Start up</span>
    </CardTitle>
  );
}

export function Business() {
  return (
    <CardTitle className="name">
      <span>Business</span>
    </CardTitle>
  );
}

export function Enterprise() {
  return (
    <CardTitle className="name">
      <span>Enterprise</span>
    </CardTitle>
  );
}