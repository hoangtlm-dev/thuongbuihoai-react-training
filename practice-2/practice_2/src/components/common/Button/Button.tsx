import React from "react";
import { ButtonProps } from "../../../types/commonType/button";
import "./button.css"

export default function Button({ value, className }: ButtonProps) {
  return (
    <label htmlFor="filter__check"
      className={`btn btn-${className}`}>
      {value}
    </label>
  );
}
