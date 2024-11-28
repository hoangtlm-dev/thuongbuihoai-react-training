import React, { memo } from "react";
import { ButtonProps } from "@common-types/button";
import "./button.css";

const Button: React.FC<ButtonProps> = memo(
  ({ text, type, onClick, disabled }) => {
    let className = "btn";
    switch (type) {
      case "primary":
        className += " btn__primary";
        break;
      case "secondary":
        className += " btn__secondary";
        break;
      case "info":
        className += " btn__info";
        break;
      case "update":
        className += " btn__update";
        break;
      case "delete":
        className += " btn__delete";
        break;
      case "warning":
        className += " btn__warning";
        break;
      case "success":
        className += " btn__success";
        break;
      default:
        break;
    }
    return (
      <button className={className} disabled={disabled} onClick={onClick}>
        {text}
      </button>
    );
  }
);

export default Button;
