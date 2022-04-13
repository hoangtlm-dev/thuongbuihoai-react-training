import React from "react";
import "./input.css"

interface InputProps {
  className: string;
  type: string;
  placeholder: string;
}

function Input({ className, type, placeholder }: InputProps): JSX.Element {
  return (
    <input className = {`input input--${className}`} type={type} placeholder={placeholder}/>
    )
  }
export { Input };