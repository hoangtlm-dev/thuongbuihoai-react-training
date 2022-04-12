import React from "react";
import "./icon.css"

interface IconProps {
  icon: string
  alt: string
  className: string;
}

export default function Icon({ icon, alt, className }: IconProps): JSX.Element {
  return (
    <img className={`icon--${className}`} src={icon} alt={alt} />
  );
}