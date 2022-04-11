import React from "react";
import "./bar.css"

interface BarProps {
  logo: string
}

export default function Bar({ logo }: BarProps): JSX.Element {
  return (
    <img className="nav__bar" src={logo} alt="Nav bar" />
  );
}