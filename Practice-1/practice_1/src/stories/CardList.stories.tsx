import React from "react";
import CardList from "../components/list/cardList/CardList";
import { CARD_LIST } from "../constants/card";
export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/CardList",
  component: CardList,
};

export function CardLists() {
  return <CardList cardList={CARD_LIST}></CardList>
}