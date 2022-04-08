import React from "react";
import { CardProps } from "../../types/card";
import "./cardText.css";

export default function CardText({
  value1,
  value2,
  value3,
  value4,
}: CardProps): JSX.Element {
  return (
    <div className="card__content">
      <p className="card__text">{value1}</p>
      <p className="card__text">{value2}</p>
      <p className="card__text">{value3}</p>
      <p className="card__text">{value4}</p>
    </div>
  );
}