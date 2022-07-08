import React from "react";
import Icon from "../Icon/Icon";
import "./counter.css";

const Counter: React.FC = () => {
  return (
    <div className="counter">
      <i className="fa fa-minus"></i>
      <input className="counter__input" min={0} />
      <div className="counter__plus">
        <Icon iconName="plus" />
      </div>
    </div>
  );
};

export default Counter;
