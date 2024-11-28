import React, { memo } from "react";
import { ButtonProps } from "@/types/commonType/button";
import "./button.css";

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      className={`btn btn__${className}`} onClick={onClick}>
      {text}
    </button>
  );
}

export default memo(Button);
