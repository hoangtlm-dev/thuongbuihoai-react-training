import React from "react";
import "./description.css";

interface DescriptionProps {
  className?: string;
  children: string | JSX.Element;
}

function Description({ className, children }: DescriptionProps): JSX.Element {
  return (
      <p className={`description description--${className}`}> {children} </p>
    )
  }
export { Description };
