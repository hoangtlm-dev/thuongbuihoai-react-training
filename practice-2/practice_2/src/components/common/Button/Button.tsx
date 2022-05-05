import React from "react";
import { ButtonProps } from "../../../types/commonType/button";
import "./button.css"

const Button: React.FC<ButtonProps> = ({ value, className }) => {
  return (
    <button
      className={`btn btn__${className}`}>
      {value}
    </button>
  );
}

export default Button;
