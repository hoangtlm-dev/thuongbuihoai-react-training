import React from "react";
import { FooterContact } from "../../types/footer";
import "./contact.css"

interface ContactProps {
  footerContact: FooterContact[]
}

function Contact({ footerContact }: ContactProps): JSX.Element {
  function renderFooterContact(list: FooterContact[]) {
    return list.map((item) =>
      <div className = {`contact__info--${item.className}`}>
        <ul className = "contact__list">
          <li className = "contact__item">{item.contact1}</li>
          <li className = "contact__item">{item.contact2}</li>
          <li className = "contact__item">{item.contact3}</li>
        </ul>
        <p className = "contact__text">{item.contact4}</p>
      </div>
    );
  }
  return (
    <address className = "contact">
      {renderFooterContact(footerContact)}
    </address>
    )
  }
export { Contact }