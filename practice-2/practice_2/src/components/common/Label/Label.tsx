import React from "react";
import { LabelProps } from "../../../types/commonType/label";
import "./label.css"

export default function Label({ value, className }: LabelProps) {
  return (
    <label htmlFor="filter__check"
      className={`label-${className}`}>
      {value}
    </label>
  );
}
