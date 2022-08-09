import React from "react";
import styleInput from "./input.module.css";

interface InputProps {
  type: string;
  placeholder: string;
}

const Input: React.FC<InputProps> = ({
  type = "text",
  placeholder = "Your email...",
}) => (
  <input className={styleInput.input} type={type} placeholder={placeholder} />
);

export default Input;
