import React, { ChangeEventHandler, memo, MouseEventHandler } from "react";
import styleInput from "./input.module.css";

interface InputProps {
  type: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type,
      placeholder,
      onClick = () => {},
      onChange = () => {},
      onBlur = () => {},
    },
    ref,
  ) => {
    return (
      <input
        data-testid="input-value"
        ref={ref}
        className={styleInput.input}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        onClick={onClick}
        onBlur={onBlur}
      />
    );
  },
);

export default memo(Input);
