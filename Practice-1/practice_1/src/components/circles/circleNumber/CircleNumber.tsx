import React from "react";
import "./circleNumber.css"

interface CircleNumberProps {
  number1: number;
  number2: number;
}

function CircleNumber({ number1, number2  }: CircleNumberProps): JSX.Element {
  return (
      <div className = "circle__number">
        <h2 className = "circle__report">{number1}<span>,{number2}</span></h2>
      </div>
    )
  }
export { CircleNumber };