import React from "react";
import Plan from "../components/section/plan/Plan";
import { CARD_LIST } from "../constants/card";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Plan",
  component: Plan,
};

export function NamePage() {
  return (
    <Plan planTitle="Subscribing Plans" cardList={CARD_LIST}/>
  );
}