import React, { useMemo } from "react";
import styleButton from "./button.module.css";

interface ButtonProps {
  type?: string;
  text?: string;
  disable?: boolean;
  icon?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  text,
  disable,
  icon,
}) => {
  const className = useMemo(() => {
    switch (type) {
      case "primary":
        return `btn-${type}`;
      case "secondary":
        return `btn-${type}`;
      default:
        return "";
    }
  }, [type]);

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
