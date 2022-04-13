import React from "react";
import { Circle } from "../circle/Circle";
import { CircleNumber } from "../circleNumber/CircleNumber";
import "./circlePercent.css"

interface CirclePercentProps {
  number1: number;
  number2: number;
  className?: string;
}

function CirclePercent({ number1, number2, className }: CirclePercentProps): JSX.Element {
  return (
    <div className = "circle__percent">
      <Circle className= {`${className}`} />
      <div className = "circle__number">
        <CircleNumber number1={number1} number2={number2} />
      </div>
    </div>
    )
  }
export { CirclePercent };