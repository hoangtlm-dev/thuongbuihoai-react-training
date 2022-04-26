import React from "react";
import { ButtonProps } from "../../types/button";
import "./button.css"

export default function Button({ children, className }: ButtonProps) {
  return (
    <label htmlFor="filter__check"
      className={`btn btn-${className}`}>
      {children}
    </label>
  );
}
