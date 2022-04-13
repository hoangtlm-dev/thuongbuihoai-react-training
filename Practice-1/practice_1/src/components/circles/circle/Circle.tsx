import React from "react";
import "./circle.css"

interface CirclePercentProps {
  className?: string;
}

function Circle({ className }: CirclePercentProps): JSX.Element {
  return (
    <svg className = {`circle__percent-${className}`}>
      <circle className = "circle--medium" cx="60" cy="60" r="50"></circle>
      <circle className = "circle--medium" cx="60" cy="60" r="50"></circle>
      <circle className = "circle--extra-lager" cx="100" cy="100" r="80"></circle>
      <circle className = "circle--extra-lager" cx="100" cy="100" r="80"></circle>
    </svg>
    )
  }
export { Circle };