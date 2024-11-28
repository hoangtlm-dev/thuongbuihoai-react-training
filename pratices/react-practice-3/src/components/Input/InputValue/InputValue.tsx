import React, { ChangeEventHandler, memo } from "react";
import "./inputValue.css"

interface InputProps {
  id?: string;
  className?: string;
  value?: string | number;
  type?: string;
  name?: string;
  min?: number;
  multiple?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputValue: React.FC<InputProps> = memo(({
    id,
    className,
    value,
    type,
    min,
    name,
    multiple,
    onChange,
  }) => {
    return (
      <input
        id={id}
        className={className}
        value={value}
        type={type}
        min={min}
        name={name}
        multiple={multiple}
        onChange={onChange}
      />
    );
  }
);

export default InputValue;
