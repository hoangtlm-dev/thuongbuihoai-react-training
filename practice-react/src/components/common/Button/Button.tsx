import React, { memo } from "react";
import Icon from "../Icon/Icon";
import "./button.css";

interface ButtonProps {
  type?: string;
  text: string;
  icon?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = memo(({ text, type, onClick, icon }) => {
  let className = "btn";
  switch (type) {
    case "primary":
      className += " btn__primary";
      break;
    case "light":
      className += " btn--light";
      break;
    case "dark":
      className += " btn--dark";
      break;
    case "large":
      className += " btn--large";
      break;
    case "outline--light":
      className += " btn__outline--light";
      break;
    case "outline--dark":
      className += " btn__outline--dark";
      break;
    default:
      break;
  }
  return (
    <>
      <button className={className} onClick={onClick}>
        {text}
      </button>
      {icon && (
        <div className="btn btn__icon">
          <Icon iconName="filter" />
        </div>
      )}
    </>
  );
});

export default Button;
