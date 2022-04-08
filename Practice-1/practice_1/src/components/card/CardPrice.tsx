import React from "react";
import "./cardPrice.css";

interface CardProps {
  children1: string;
  children2: number
}

function CardPrice({ children1, children2 }: CardProps): JSX.Element {
  return (
      <p className={`card__unit`}> {children1}
      <span className={`card__price`}>{children2}</span>
      </p>
    )
  }
export { CardPrice };