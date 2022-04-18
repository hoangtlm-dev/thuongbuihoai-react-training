import React from "react";
import { CardProps } from "../../../types/card";
import { RenderCard } from "../../../types/cardList";
import Card from "../../cards/card/Card";
import "./cardList.css"

export default function CardList({ cardList }: RenderCard): JSX.Element {
  function renderCardList(list: CardProps[]) {
    return list.map((item) => (
      <Card
        key={item.key}
        url={item.url}
        value={item.value}
        title={item.title}
        unit={item.unit}
        price={item.price}
      />
    ));
  }

  return (
    <div className="card__list">{renderCardList(cardList)}</div>
  );
}