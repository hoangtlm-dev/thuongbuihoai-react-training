import React, { memo } from "react";
import Icon, { IconType } from "../Icon";
import styleButton from "./button.module.css";

export enum ButtonType {
  default = "",
  primary = "primary",
  secondary = "secondary",
}

interface ButtonProps {
  type?: ButtonType;
  text?: string;
  disable?: boolean;
  icon?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = React.forwardRef(
  ({
    type = ButtonType.default,
    text = "",
    disable = false,
    icon = false,
    onClick = () => {},
  }) => {
    return (
      <button
        className={styleButton[`btn-${type}`]}
        disabled={disable}
        onClick={onClick}>
        {text}
        {icon && <Icon iconName={IconType.arrowRight} />}
      </button>
    );
  },
);

export default memo(Button);
