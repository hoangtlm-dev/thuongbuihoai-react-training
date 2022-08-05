import React from "react";
import styleInput from "./input.module.css";

interface placeholder {
  type: string;
  placeholder: string;
}

const Input: React.FC<placeholder> = ({ type, placeholder }) => {
  return (
    <input className={styleInput.input} type={type} placeholder={placeholder} />
  );
};

export default Input;
