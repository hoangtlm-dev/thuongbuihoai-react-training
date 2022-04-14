import React from "react";
import { AboutProps } from "../../types/about";
import { FooterContact } from "../../types/footer";
import { SpriteImageProps } from "../../types/spriteImage";
import About from "../about/About";
import { Contact } from "../contact/Contact";
import Email from "../email/Email";
import SpriteImage from "../spriteImage/SpritesImage";
import "./footer.css"


export interface FooterProps {
  spriteImages: SpriteImageProps[];
  footerText: string;
  aboutUs: AboutProps[];
  footerContact: FooterContact[];
}

export default function Footer({
  spriteImages,
  footerText,
  aboutUs,
  footerContact
}: FooterProps): JSX.Element {
  return (
    <footer className = "footer">
      <div className = "container">
        <div className = "footer__info">
          <SpriteImage spriteImages={spriteImages} />
        </div>
        <hr/>
        <Email footerText={footerText} />
        <About aboutUs={aboutUs} />
        <Contact footerContact={footerContact} />
      </div>
    </footer>
  );
}