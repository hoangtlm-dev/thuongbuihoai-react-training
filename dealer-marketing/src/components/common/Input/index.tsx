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
  onClick = () => null,
  onChange = () => null,
  onBlur = () => null,
}) => (
  <input
    onChange={onChange}
    onClick={onClick}
    onBlur={onBlur}
    className={styleInput.input}
    type={type}
    placeholder={placeholder}
  />
);

export default memo(Input);
