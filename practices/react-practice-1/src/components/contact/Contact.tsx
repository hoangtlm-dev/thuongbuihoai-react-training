import React from "react";
import { ContactProps } from "../../types/contact";
import { FooterContact } from "../../types/footer";
import "./contact.css"

export function Contact({ footerContact, contact }: ContactProps) {
  function renderFooterContact(list: FooterContact[]) {
    return list.map((item) =>
      <div className={`contact__info--${item.className}`}>
        <ul className="contact__list">
          {
            contact.map(items => (<li className="contact__item">{items}</li>))
          }
        </ul>
        <p className="contact__text">{item.info}</p>
      </div>
    );
  }
  return (
    <address className="contact">
      {renderFooterContact(footerContact)}
    </address>
  )
}