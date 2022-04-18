import React from "react";
import { Contact } from "../components/contact/Contact";
import { FOOTER_CONTACT, FOOTER_MEDIUM } from "../constants/footer";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Contact",
  component: Contact,
};

export function Contacts() {
  return <Contact footerContact={FOOTER_CONTACT} contact={FOOTER_MEDIUM.contact} />;
}