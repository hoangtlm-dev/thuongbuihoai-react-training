import React from "react";
import { LabelProps } from "../../../types/commonType/label";
import "./label.css"

const Label: React.FC<LabelProps> = ({ value, className }) => {
  return (
    <label htmlFor="filter__check"
      className={`label-${className}`}>
      {value}
    </label>
  );
}

export default Label;
