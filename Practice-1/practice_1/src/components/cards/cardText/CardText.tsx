import React from "react";
import "./cardText.css";

interface CardTextProps {
  value1: string;
  value2: string;
  value3: string;
  value4?: string
}

export default function CardText({
  value1, value2, value3, value4,
}: CardTextProps): JSX.Element {
  return (
    <div className="card__content">
      <p className="card__text">{value1}</p>
      <p className="card__text">{value2}</p>
      <p className="card__text">{value3}</p>
      <p className="card__text">{value4}</p>
    </div>
  );
}