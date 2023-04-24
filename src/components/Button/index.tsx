import React, { memo } from "react";

export enum ButtonType {
  default = "",
  primary = "primary",
  secondary = "secondary",
  buttonIcon = "icon",
}

interface ButtonProps {
  type?: ButtonType;
  text?: string;
  disable?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.default,
  text = "",
  disable = false,
  onClick = () => {},
}) => {
  return (
    <button
      disabled={disable}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default memo(Button);
