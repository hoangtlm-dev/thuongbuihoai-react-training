import React from "react";
import { CardTitleProps } from "../../types/cardTitle";
import "./cardTitle.css";

export default function CardTitle({
  className,
  children,
}: CardTitleProps): JSX.Element {
  return (
    <p className={`card__${className}`}>
      {children}
    </p>
  )
}