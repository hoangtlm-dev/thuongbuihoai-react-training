import React from "react";
import "./button.css";

interface ButtonProps {
  type: string,
  className?: string,
  children: string | JSX.Element,
}

export default function Button({
  type,
  className,
  children,
}: ButtonProps): JSX.Element {
  return (
    <button
      type="button"
      className={`btn btn-${type} ${className}`}
    >
      {children}
    </button>
  );
}