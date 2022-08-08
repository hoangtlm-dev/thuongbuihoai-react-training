import React from "react";
import Icon from "../Icon";
import styleButton from "./button.module.css";

interface ButtonProps {
  type?: string;
  text?: string;
  disable?: boolean;
  icon?: boolean;
  onClick?: () => void;
}

const classNameType = {
  primary: "btn-primary",
  secondary: "btn-secondary",
};

const Button: React.FC<ButtonProps> = ({
  type = "btn-primary",
  onClick,
  text,
  disable = false,
  icon = false,
}) => {
  const className = classNameType[type as keyof typeof classNameType] || "";

  return (
    <button
      className={styleButton[className]}
      disabled={disable}
      onClick={onClick}>
      {text}
      {icon && <Icon iconName="arrowRight" />}
    </button>
  );
};

export default Button;
