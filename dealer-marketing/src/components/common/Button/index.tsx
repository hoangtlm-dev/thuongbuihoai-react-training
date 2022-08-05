import React from "react";
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
  type,
  onClick,
  text,
  disable,
  icon,
}) => {
  const className = classNameType[type as keyof typeof classNameType] || "";

  return (
    <button
      className={styleButton[className]}
      disabled={disable}
      onClick={onClick}>
      {text}
      {icon && <i className="fa-solid fa-arrow-right"></i>}
    </button>
  );
};

export default Button;
