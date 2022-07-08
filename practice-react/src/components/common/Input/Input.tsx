import React, { memo } from "react";
import "./input.css";

interface placeholder {
  type: string;
  placeholder: string;
}

const Input: React.FC<placeholder> = memo(({ type, placeholder }) => {
  return <input className="input input__value" type={type} placeholder={placeholder} />;
});

export default Input;
