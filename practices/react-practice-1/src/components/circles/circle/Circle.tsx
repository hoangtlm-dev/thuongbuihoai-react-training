import React from "react";
import { CircleProps } from "../../../types/circles";
import "./circle.css"

export function Circle({ className }: CircleProps): JSX.Element {
  return (
    <svg className={`circle__percent-${className}`}>
      <circle className="circle--medium" cx="60" cy="60" r="50"></circle>
      <circle className="circle--medium" cx="60" cy="60" r="50"></circle>
      <circle className="circle--extra-lager" cx="100" cy="100" r="80"></circle>
      <circle className="circle--extra-lager" cx="100" cy="100" r="80"></circle>
    </svg>
  )
}