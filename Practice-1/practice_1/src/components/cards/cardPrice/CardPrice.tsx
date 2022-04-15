import React from "react";
import "./cardPrice.css";

interface CardProps {
  unit: string;
  price: number
}

function CardPrice({ unit, price }: CardProps): JSX.Element {
  return (
      <p className={`card__unit`}> {unit}
        <span className={`card__price`}>{price}</span>
      </p>
    )
  }
export { CardPrice };