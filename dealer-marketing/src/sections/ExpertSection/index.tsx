import React, { memo } from "react";
import Image from "next/image";
import { Text } from "@components/common";
import { TextType } from "@components/common/Text";
import styleExpertSection from "./expertSection.module.css";

const ExpertSection: React.FC = () => (
  <div data-testid="expert-section" className={styleExpertSection.expert}>
    <div className={styleExpertSection["expert-position"]}>
      <div className={styleExpertSection["expert-title"]}>
        <Text size={TextType.large} text="DMM Expert Podcast Interviews" />
      </div>
      <div className={styleExpertSection["expert-list"]}>
        <div className={styleExpertSection["expert-section"]}>
          <figure className={styleExpertSection["expert-layout"]}>
            <Image
              src="/images/avatar/ibrahim-mesbah.png"
              alt="This is image of Mr adam dennis"
              className={styleExpertSection["expert-image"]}
              width={130}
              height={130}
            />
          </figure>
          <p className={styleExpertSection["expert-description"]}>
            Evaluating OEM Programs and Providing Better Customer Experiences
            with Ibrahim Mesbah
          </p>
          <figure className={styleExpertSection["expert-contact"]}>
            <Image
              src="/images/inside-auto.png"
              alt="This is image inside auto"
              className={styleExpertSection["expert-image-contact"]}
              width={135}
              height={60}
            />
          </figure>
        </div>
        <div className={styleExpertSection["expert-section"]}>
          <figure className={styleExpertSection["expert-layout"]}>
            <Image
              src="/images/avatar/ilana-shabtay.png"
              alt="This is image of Mr adam dennis"
              className={styleExpertSection["expert-image"]}
              width={130}
              height={130}
            />
          </figure>
          <p className={styleExpertSection["expert-description"]}>
            Experimarketing Episode 27: No Inventory? No Problem.
          </p>
          <figure className={styleExpertSection["expert-contact"]}>
            <Image
              src="/images/experimaketing.png"
              alt="This is image inside auto"
              className={styleExpertSection["expert-image-contact"]}
              width={135}
              height={60}
            />
          </figure>
        </div>
        <div className={styleExpertSection["expert-section"]}>
          <figure className={styleExpertSection["expert-layout"]}>
            <Image
              src="/images/avatar/brent-albrecht.png"
              alt="This is image of Mr adam dennis"
              className={styleExpertSection["expert-image"]}
              width={130}
              height={130}
            />
          </figure>
          <p className={styleExpertSection["expert-description"]}>
            Website Clicks?! they`re Still Clickin
          </p>
          <figure className={styleExpertSection["expert-contact"]}>
            <Image
              src="/images/experimaketing.png"
              alt="This is image inside auto"
              className={styleExpertSection["expert-image-contact"]}
              width={135}
              height={60}
            />
          </figure>
        </div>
      </div>
    </div>
  </div>
);

export default memo(ExpertSection);
