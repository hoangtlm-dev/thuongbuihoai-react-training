import React from "react";
import { TitleProps } from "../../types/title";
import "./title.css"

export default function Title({
  children,
}: TitleProps): JSX.Element {
  return (
    <h2 className="card__title">
      {children}
    </h2>
  )
}