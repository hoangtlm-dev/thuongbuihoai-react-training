import React from "react";
import { BarProps } from "../../types/bar";
import "./bar.css"

export default function Bar({ logo }: BarProps): JSX.Element {
  return (
    <img className="nav__bar" src={logo} alt="Nav bar" />
  );
}