import React, { memo } from "react";
import Icon from "../Icon/Icon";
import "./counter.css";

interface CounterProps {
  counter?: number;
}

const Counter: React.FC<CounterProps> = memo(({counter}) => {
  return (
    <div data-testid="counter" className="counter">
      <i className="fa fa-minus"></i>
      <input className="counter__input" defaultValue={counter} min={0} />
      <div className="counter__plus">
        <Icon iconName="plus" />
      </div>
    </div>
  );
});

export default Counter;
