import React from "react";
import { CardProps } from "../../types/card";
import Card from "../cards/card/Card";
import "./cardList.css"

interface RenderCard {
  cardList: CardProps[];
}
export default function CardList({ cardList }: RenderCard): JSX.Element {
  function renderCardList(list: CardProps[]) {
    return list.map((item) => (
      <Card
        key={item.key}
        className={`card__info card__info--${item.className}`}
        value1={item.value1}
        value2={item.value2}
        value3={item.value3}
        value4={item.value4}
        title={item.title}
        unit={item.unit}
        price={item.price}
        label={item.label}
      />
    ));
  }
  return (
    <div className="container">
      <div className="card__list">{renderCardList(cardList)}</div>
    </div>
  );
}