import React from "react";
import { FooterProps } from "../../types/footers";
import About from "../about/About";
import { Contact } from "../contact/Contact";
import Email from "../email/Email";
import ButtonContact from "../button/ButtonContact";
import "./footer.css"

export default function Footer({
  contact,
  footerText,
  aboutUs,
  footerContact,
  infoContact
}: FooterProps): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__info">
          <ButtonContact buttonContacts={contact} />
        </div>
        <hr/>
        <Email footerText={footerText} />
        <About aboutUs={aboutUs} />
        <Contact footerContact={footerContact} contact={infoContact} />
      </div>
    </footer>
  );
}