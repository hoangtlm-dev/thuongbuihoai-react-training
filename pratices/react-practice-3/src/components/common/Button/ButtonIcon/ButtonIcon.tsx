import React, { memo } from "react";

interface ButtonIconProps {
  type?: string;
  children: JSX.Element;
  onClick?: () => void;
}

const ButtonIcon: React.FC<ButtonIconProps> = memo(
  ({ children, type, onClick }) => {
    let className = "btn";
    switch (type) {
      case "update":
        className += " btn__update";
        break;
      case "delete":
        className += " btn__delete--storybook";
        break;
      default:
        break;
    }
    return (
      <button className={className} onClick={onClick}>
        {children}
      </button>
    );
  }
);

export default ButtonIcon;
