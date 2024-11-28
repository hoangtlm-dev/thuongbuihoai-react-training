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
    <SectionTitle className="nav__title">HOFMANN</SectionTitle>
  );
}