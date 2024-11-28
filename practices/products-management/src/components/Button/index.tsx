import React, { memo } from 'react';
import styleButton from './Button.module.css';

export enum ButtonType {
  default = '',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary',
  quaternary = 'quaternary',
  quinary = 'quinary'
}

interface ButtonProps {
  type?: ButtonType;
  text?: string;
  disable?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type = ButtonType.default,
  text = '',
  disable = false,
  children,
  onClick = () => {}
}) => {
  return (
    <button
      data-testid='button'
      className={styleButton[`btn-${type}`]}
      disabled={disable}
      onClick={onClick}
    >
      {text}
      {children}
    </button>
  );
};

export default memo(Button);
