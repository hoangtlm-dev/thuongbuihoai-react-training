import React, { memo, useState } from "react";
import Icon from "../Icon/Icon";
import "./counter.css";

interface CounterProps {
  counter?: number;
}

const Counter: React.FC<CounterProps> = memo(({ counter }) => {
  const [count, setCount] = useState<number>(counter!);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div data-testid="counter" className="counter">
      <div className="counter__minus">
        <Icon onClick={handleDecrease} iconName="minus" />
      </div>
      <input className="counter__input" value={count} min={0} />
      <div className="counter__plus">
        <Icon onClick={handleIncrease} iconName="plus" />
      </div>
    </div>
  );
});

export default Counter;
