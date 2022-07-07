import React from "react";
import "./counter.css";

const Counter: React.FC = () => {
  return (
    <div className="counter">
      <i className="fa fa-minus"></i>
      <input className="counter__input" min={0} />
    </div>
  );
};

export default Counter;
