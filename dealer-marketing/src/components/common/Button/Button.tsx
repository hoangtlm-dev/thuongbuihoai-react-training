import React, { useMemo } from "react";
import styleButton from "./button.module.css";

interface ButtonProps {
  type?: string;
  text?: string;
  disable?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, text, disable }) => {
  const className = useMemo(() => {
    switch (type) {
      case "primary":
        return `btn-${type}`;
      case "secondary":
        return `btn-${type}`;
      default:
        return "btn";
    }
  }, [type]);

  return (
    <button
      className={styleButton[className]}
      disabled={disable}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
