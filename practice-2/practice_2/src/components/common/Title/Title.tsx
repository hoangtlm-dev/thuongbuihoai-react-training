import React from "react";
import { TitleProps } from "../../../types/commonType/title";
import "./title.css"

const Title: React.FC<TitleProps> = ({ value }) => {
  return (
    <h2 className="card__title">
      {value}
    </h2>
  )
}

export default Title;
