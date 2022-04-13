import React from "react";
import { CircleListProps } from "../../types/circle";
import { CirclePercent } from "../circles/circlePercent/CirclePercent";
import { Description } from "../description/Description";
import SectionTitle from "../title/SectionTitle";
import "./circleItem.css"

export default function CircleItem({
  number1, number2, title, content, className
}: CircleListProps): JSX.Element {
  return (
    <div className = "circle__info">
    <CirclePercent className = {`${className}`} number1={number1} number2={number2} />
    <SectionTitle className="circle__title"><p>{title}</p></SectionTitle>
    <Description className="content">{content}</Description>
  </div>
  );
}