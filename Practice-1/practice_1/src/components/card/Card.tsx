import React from "react";
import CardTitle from "../title/CardTitle";
import { CardPrice } from "./CardPrice";
import CardText from "./CardText";
import Button from "../button/Button";
import "./card.css"
import { CardProps } from "../../types/card";

export default function Card({
  className,
  title,
  unit,
  price,
  value1,
  value2,
  value3,
  value4,
  label,
}: CardProps): JSX.Element {
  return (
    <div className="card">
      <div className={`card__info card__info--${className}`}>
        <CardTitle className="name"><span>{title}</span></CardTitle>
        <CardPrice children1={unit} children2={price} ></CardPrice>
      </div>
      <div className="card__description">
        <CardText value1={value1} value2={value2} value3={value3} value4={value4}></CardText>
        <Button type="outline">{label}</Button>
      </div>
    </div>
  );
}