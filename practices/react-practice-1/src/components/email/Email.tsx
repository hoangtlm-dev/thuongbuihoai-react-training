import React from "react";
import { EmailProps } from "../../types/email";
import Button from "../button/Button";
import { Description } from "../description/Description";
import { Input } from "../input/Input";

export default function Email({ footerText }: EmailProps): JSX.Element {
  return (
    <div className="footer__email">
      <Description className="footer">{footerText}</Description>
      <Input className="contact" type="email" placeholder="Enter Email" />
      <Button className="dark">Subscribe</Button>
    </div>
  );
}