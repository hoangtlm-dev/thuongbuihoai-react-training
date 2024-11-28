import React from "react";
import { CardPriceProps } from "../../../types/cardPrice";
import "./cardPrice.css"

export default function CardPrice({ unit, price }: CardPriceProps) {
  return (
    <p className={`card__unit`}> {unit}
      <span className={`card__price`}>{price}</span>
    </p>
  )
}