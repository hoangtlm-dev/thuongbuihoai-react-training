import React from "react";
import { CircleListProps } from "../../../types/circleList";
import { RenderCircle } from "../../../types/resultList";
import CircleItem from "../../circleItem/CircleItem";

export default function CircleList({ circleList }: RenderCircle): JSX.Element {
  function renderCircleList(list: CircleListProps[]) {
    return list.map((item) => (
      <CircleItem
        key={item.key}
        className={item.className}
        number1={item.number1}
        number2={item.number2}
        title={item.title}
        content={item.content} 
      />
    ));
  }

  return (
    <div className="result__circle">{renderCircleList(circleList)}</div>
  );
}