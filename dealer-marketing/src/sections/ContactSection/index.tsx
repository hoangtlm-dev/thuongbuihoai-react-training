import React from "react";
import { Text, Input, Button, Icon } from "@components/common";
import styleContact from "./contactSection.module.css";

const ContactSection = () => (
  <>
    <div className="first-line"></div>
    <div className={styleContact.contact}>
      <div className={styleContact["contact-info"]}>
        <Text size="medium" text="Get Tips & Tricks every Week!" />
        <p className={styleContact["contact-description"]}>
          Join our newsletter and get news in your inbox every week! We hate
          spam too, so no worries about this.
        </p>
      </div>
      <div className={styleContact["contact-submit"]}>
        <div className={styleContact["contact-input"]}>
          <Icon iconName="letter" />
          <Input type="text" placeholder="Your email..." />
        </div>
        <Button type="secondary" text="Subscribe" />
      </div>
    </div>
    <div className="secondary-line"></div>
  </>
);

export default ContactSection;
