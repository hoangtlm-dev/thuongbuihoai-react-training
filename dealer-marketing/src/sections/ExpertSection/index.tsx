import React, { memo } from "react";
import { Text } from "@components/common";
import { TextType } from "@components/common/Text";
import { CardExpert } from "@components";
import { ExpertContentType } from "@common-types/expert";
import { EXPERT_SECTION } from "@constants/expert";
import styleExpertSection from "./expertSection.module.css";

const ExpertSection: React.FC = () => (
  <div data-testid="expert-section" className={styleExpertSection.expert}>
    <div className={styleExpertSection["expert-position"]}>
      <div className={styleExpertSection["expert-title"]}>
        <Text size={TextType.large} text="DMM Expert Podcast Interviews" />
      </div>
      <div className={styleExpertSection["expert-list"]}>
        {EXPERT_SECTION.map((expert) => (
          <CardExpert
            key={expert.key}
            isImage={true}
            url={expert.src}
            alt={expert.alt}
            isLayoutImage={true}
            isDescription={true}
            urlContact={expert.srcInfo}
            altContact={expert.altInfo}
            description={expert.description}
            layout={ExpertContentType.grid}
          />
        ))}
      </div>
    </div>
  </div>
);

export default memo(ExpertSection);
