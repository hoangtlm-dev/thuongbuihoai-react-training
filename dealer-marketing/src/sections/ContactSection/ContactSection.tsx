import React from "react";
import Button from "@src/components/common/Button/Button";
import Input from "@src/components/common/Input/Input";
import Text from "@src/components/common/Text/Text";
import styleContact from "./contactSection.module.css";

const ContactSection = () => {
  return (
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
            <i className="fa-solid fa-envelope"></i>
            <Input type="text" placeholder="Your email" />
          </div>
          <Button type="secondary" text="Subscribe" />
        </div>
      </div>
      <div className="secondary-line"></div>
    </>
  );
};

export default ContactSection;
