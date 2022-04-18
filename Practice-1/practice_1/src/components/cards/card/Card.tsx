import React from "react";
import CardTitle from "../../title/CardTitle";
import CardText from "../cardText/CardText";
import Button from "../../button/Button";
import { CardProps } from "../../../types/card";
import CardPrice from "../cardPrice/CardPrice";
import "./card.css"
import Bar from "../../navBar/Bar";
import Icon from "../../icon/Icon";

export default function Card({
  url,
  title,
  unit,
  price,
  value,
}: CardProps) {
  return (
    <div className="card">
      <Icon icon={url} alt="image card" className="bgCard" />
      <div className="card__number">
        <CardTitle className="name"><span>{title}</span></CardTitle>
        <CardPrice unit={unit} price={price} ></CardPrice>
      </div>
      <div className="card__description">
        <CardText value={value}></CardText>
        <Button className="outline">Get started</Button>
      </div>
    </div>
  );
}