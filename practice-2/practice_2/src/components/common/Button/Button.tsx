import React from "react";
import { ButtonProps } from "../../../types/commonType/button";

export default function Button({ value, className }: ButtonProps) {
  return (
    <button
      className={`btn btn__${className}`}>
      {value}
    </button>
  );
}