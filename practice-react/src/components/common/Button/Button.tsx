import React, { memo } from "react";
import { ButtonProps } from "@common-types/button";
import "./button.css";

const Button: React.FC<ButtonProps> = memo(({ text, type, onClick }) => {
  let className = "btn";
  switch (type) {
    case "primary":
      className += " btn__primary";
      break;
    case "secondary":
      className += " btn__secondary";
      break;
    case "outline":
      className += " btn__outline";
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
