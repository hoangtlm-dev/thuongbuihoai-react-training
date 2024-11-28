import React, { memo, useMemo } from "react";
import Icon from "../Icon/Icon";
import "./button.css";

interface ButtonProps {
  type?: string;
  text: string;
  icon?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = memo(({ text, type="primary", onClick, icon, disabled }) => {
  const className = useMemo(() => {
    switch (type) {
      case "primary":
        return ` btn-${type}`;
      case "light":
        return ` btn-${type}`;
      case "dark":
        return ` btn-${type}`;
      case "large":
        return ` btn-${type}`;
      case "outline-light":
        return ` btn-${type}`;
      case "outline-dark":
        return ` btn-${type}`;
      default:
        return "btn"
    }
  }, [type]);

  return (
    <button className={className} disabled={disabled} onClick={onClick}>
      {text}
      {icon && (
        <div className="btn btn-icon">
          <Icon iconName="filter" />
        </div>
      )}
    </button>
  );
});

export default Button;
