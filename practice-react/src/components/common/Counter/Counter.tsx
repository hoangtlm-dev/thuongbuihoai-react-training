import React, { memo, useCallback, useState } from "react";
import Icon from "../Icon/Icon";
import "./counter.css";

interface CounterProps {
  counter?: number;
}

const Counter: React.FC<CounterProps> = memo(({ counter }) => {
  const [count, setCount] = useState<number>(counter!);
  const [quantity, setQuantity] = useState<{}>("")

  const handleIncrease = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleDecrease = useCallback(() => {
    setCount(count - 1);
  }, [count]);

  // handle change value
  const handleChange = useCallback(
    (event: { target: HTMLInputElement }) => {
      const value = event.target.value;
      const fieldName = event.target.name;
      setQuantity({...quantity, [fieldName]: value})
    },
    [count]
  );

  return (
    <div data-testid="counter" className="counter">
      <div className="counter-minus">
        <Icon onClick={handleDecrease} iconName="minus" />
      </div>
      <input
        className="counter-input"
        name="productQuantity"
        min={0}
        value={count}
        onChange={handleChange}
      />
      <div className="counter-plus">
        <Icon onClick={handleIncrease} iconName="plus" />
      </div>
    </div>
  );
});

export default Counter;
