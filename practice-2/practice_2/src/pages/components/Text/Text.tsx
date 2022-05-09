import React, { memo } from "react";
import { TitleProps } from "../../../types/commonType/title";

const Text: React.FC<TitleProps> = ({ text }) => {

  return (
    <p className="description">
      {text}
    </p>
  );
}

export default memo(Text);
