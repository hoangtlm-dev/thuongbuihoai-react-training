import React from "react";
import { ButtonProps } from "../../types/button";
import "./button.css"

export default function Button({ children }: ButtonProps) {
  return (
    <button
      type= "submit"
      className="btn btn-filter">
      {children}
    </button>
  );
}
