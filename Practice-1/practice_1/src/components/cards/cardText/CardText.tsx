import React from "react";
import { CardTextProps } from "../../../types/cardText";
import "./cardText.css";

export default function CardText({
  value
}: CardTextProps) {
  return (
    <div className="card__content">
      {
        value.map(item => (<p className="card__text">{item}</p>))
      }
    </div>
  );
}