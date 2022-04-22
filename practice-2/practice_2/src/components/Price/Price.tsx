import React from "react";
import { PriceProps } from "../../types/price";
import "./price.css"

export default function Price({
  children,
}: PriceProps): JSX.Element {
  return (
    <p className="card__price">
      {children}
    </p>
  )
}