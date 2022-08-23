import React, { ChangeEventHandler, memo, MouseEventHandler } from "react";
import styleInput from "./input.module.css";

interface InputProps {
  type: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  onClick = () => {},
  onChange = () => {},
  onBlur = () => {},
}) => (
  <input
    data-testid="input-value"
    className={styleInput.input}
    type={type}
    placeholder={placeholder}
    onChange={onChange}
    onClick={onClick}
    onBlur={onBlur}
  />
);

export default memo(Input);
