import React, { memo } from "react";
import { IconType } from "@components/common/Icon";
import { ButtonType } from "@components/common/Button";
import { Text, Input, Button, Icon } from "@components/common";
import { TextType } from "@components/common/Text";
import styleContact from "./contactSection.module.css";

const ContactSection: React.FC = () => (
  <>
    <div
      data-testid="contact-section"
      className={styleContact["contact-dash-first"]}></div>
    <div className={styleContact.contact}>
      <div className={styleContact["contact-info"]}>
        <Text size={TextType.medium} text="Get Tips & Tricks every Week!" />
        <p className={styleContact["contact-description"]}>
          Join our newsletter and get news in your inbox every week! We hate
          spam too, so no worries about this.
        </p>
      </div>
      <div className={styleContact["contact-submit"]}>
        <div className={styleContact["contact-input"]}>
          <Icon iconName={IconType.letter} />
          <Input type="text" placeholder="Your email..." />
        </div>
        <Button type={ButtonType.secondary} text="Subscribe" />
      </div>
    </div>
    <div className={styleContact["contact-dash-secondary"]}></div>
  </>
);

export default memo(ContactSection);
