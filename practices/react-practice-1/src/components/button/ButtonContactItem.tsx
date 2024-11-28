import React from "react";
import { ButtonContactProps } from "../../types/buttonContact";
import "./buttonContact.css"

export default function ButtonContactItem({  title, className }: ButtonContactProps): JSX.Element {
  return (
    <ul className="socials">
      <li className="socials__item">
        <a title={title} href="javascript:void(0)">
          <i className={`sprite sprite--${className}`}></i>
        </a>
      </li>
    </ul>
  );
}