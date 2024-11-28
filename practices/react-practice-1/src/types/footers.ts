import { AboutProps } from "./about";
import { ButtonContactProps } from "./buttonContact";
import { FooterContact } from "./footer";

export interface FooterProps {
  contact: ButtonContactProps[];
  footerText: string;
  aboutUs: AboutProps[];
  footerContact: FooterContact[];
  infoContact: Array<string>;
}