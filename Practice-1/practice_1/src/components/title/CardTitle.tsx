import React from "react";
import "./cardTitle.css";

interface CardTitleProps {
  className?: string;
  children: JSX.Element;
}

export default function CardTitle({
  className,
  children,
}: CardTitleProps): JSX.Element {
  return (
      <p className={`card__${className}`}>
        {children}
      </p>
    )
  }