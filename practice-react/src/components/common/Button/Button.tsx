import React, { memo } from "react";
import "./button.css";

interface ButtonProps {
  type?: string;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = memo(({ text, type, onClick }) => {
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
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
});

export default Button;
