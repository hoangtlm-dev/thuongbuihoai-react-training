import React from "react";
import { TitleProps } from "../../types/commonType/title";

const Description: React.FC<TitleProps> = ({ value }) => {

  return (
    <p className="description">
      {value}
    </p>
  )
}

export default Description;
