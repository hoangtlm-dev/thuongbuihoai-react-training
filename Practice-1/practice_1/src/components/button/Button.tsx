import React from "react";
import "./button.css";

interface ButtonProps {
  type?: string,
  className: string,
  children: string | JSX.Element,
}

export default function Button({
  className,
  children,
}: ButtonProps): JSX.Element {
  return (
    <button
      type= "submit"
      className={`btn btn-${className}`}>
      {children}
    </button>
  );
}