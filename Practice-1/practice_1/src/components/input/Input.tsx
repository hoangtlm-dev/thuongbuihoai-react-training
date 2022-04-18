import React from "react";
import { InputProps } from "../../types/input";
import "./input.css"

export function Input({ className, type, placeholder }: InputProps): JSX.Element {
  return (
    <input className={`input input--${className}`} type={type} placeholder={placeholder} />
  )
}