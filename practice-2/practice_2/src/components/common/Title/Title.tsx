import React from "react";
import { TitleProps } from "../../../types/commonType/title";
import "./title.css"

export default function Title({
  value,
}: TitleProps): JSX.Element {
  return (
    <h2 className="card__title">
      {value}
    </h2>
  )
}