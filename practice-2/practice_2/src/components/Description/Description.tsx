import React from "react";
import { TitleProps } from "../../types/commonType/title";

export default function Description({
  value,
}: TitleProps): JSX.Element {
  return (
    <p className="description">
      {value}
    </p>
  )
}