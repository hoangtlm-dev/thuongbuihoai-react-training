import React from "react";
import { IconProps } from "../../types/icon";
import "./icon.css"

export default function Icon({ icon, alt, className }: IconProps): JSX.Element {
  return (
    <img className={`icon--${className}`} src={icon} alt={alt} />
  );
}