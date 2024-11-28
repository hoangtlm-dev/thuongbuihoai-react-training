import React from "react";
import { ButtonContactProps } from "../../types/buttonContact";
import { ButtonContactsProps } from "../../types/buttonContactList";
import "./buttonContact.css"

export default function ButtonContact({  buttonContacts }: ButtonContactsProps): JSX.Element {
  function renderButtonContact(list: ButtonContactProps[]) {
    return list.map((item) =>
      <a title={item.title} href="javascript:void(0)">
        <i className={`sprite sprite--${item.className}`} key={item.key}></i>
      </a>
    );
  }

  return (
    <ul className="socials">
      <li className="socials__item">
        {renderButtonContact(buttonContacts)}
      </li>
    </ul>
  );
}