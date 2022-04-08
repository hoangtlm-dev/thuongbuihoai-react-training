import React from "react";
import CardTitle from "../title/CardTitle";
import { CardPrice } from "./CardPrice";
import CardText from "./cardText";
import Button from "../button/Button";
import "./card.css"

export interface CardProps {
  className?: string;
  title: string;
  unit: string;
  price: number;
  value1: string;
  value2: string;
  value3: string;
  value4?: string;
  label: string;
}

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
        <CardPrice children1={unit} children2={price}></CardPrice>
      </div>
      <div className="card__description">
        <div className="card__content">
         <CardText value1={value1} value2={value2} value3={value3} value4={value4}></CardText>
        </div>
        <Button type="third">{label}</Button>
      </div>
    </div>
  );
}