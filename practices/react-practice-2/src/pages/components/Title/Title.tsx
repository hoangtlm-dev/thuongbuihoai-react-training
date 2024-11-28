import React, { memo } from "react";
import { TitleProps } from "@/types/commonType/title";
import "./title.css";

const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <h2 className="card__title">
      {text}
    </h2>
  );
}

export default memo(Title);
