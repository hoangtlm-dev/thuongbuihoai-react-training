import React from "react";
import Footer from "../components/footer/Footer";
import ABOUT_US from "../constants/about";
import { FOOTER_CONTACT, FOOTER_TEXT } from "../constants/footer";
import { SPRITES_IMAGE } from "../constants/spriteImage";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Footer",
  component: Footer,
};

export function Default() {
  return <Footer
  spriteImages={SPRITES_IMAGE}
  footerText={FOOTER_TEXT}
  aboutUs={ABOUT_US}
  footerContact={FOOTER_CONTACT} />;
}