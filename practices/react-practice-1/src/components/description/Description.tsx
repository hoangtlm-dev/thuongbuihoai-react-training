import React from "react";
import { DescriptionProps } from "../../types/description";
import "./description.css";

export function Description({ className, children }: DescriptionProps): JSX.Element {
  return (
    <p className={`description description--${className}`}>
      {children}
    </p>
  )
};