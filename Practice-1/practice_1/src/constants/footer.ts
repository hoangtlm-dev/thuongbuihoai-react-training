import { FooterContact } from "../types/footer"

const FOOTER_TEXT = "Hoffman UI Kit was made to help you quickly create beautiful layouts of responsive websites."

const FOOTER_LARGER: FooterContact = {
  className: "larger",
  contact: ["606-956-2811", "8194 Ullrich Groves Suite 986", "592 Missouri Park Suite 818"],
}

const FOOTER_MEDIUM: FooterContact = {
  className: "medium",
  contact: ["606-956-2811", "8194 Ullrich Groves Suite 986", "592 Missouri Park Suite 818"],
}

const FOOTER_CONTACT: FooterContact[] = [
  {
    className: "larger",
    contact: ["606-956-2811", "8194 Ullrich Groves Suite 986", "592 Missouri Park Suite 818"],
    info: "Copyright © 2016 Goldenfox",
  },
  {
    className: "medium",
    contact: ["123-127-3900", "4081 Maximillian Rue Suite 057", "info@hofmannui.net"],
    info: "Copyright © 2016 Goldenfox",
  }
]
export { FOOTER_TEXT, FOOTER_LARGER, FOOTER_MEDIUM, FOOTER_CONTACT }