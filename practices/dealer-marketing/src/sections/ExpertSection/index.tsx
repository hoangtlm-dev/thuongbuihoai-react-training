import React, { memo } from "react";
import { Text } from "@components/common";
import { CardExpert } from "@components/index";
import { ExpertContentType } from "types/expert";
import { EXPERT_SECTION } from "@constants/expert";
import styleExpertSection from "./expertSection.module.css";
import { SizeType } from "@components/common/Text";

const ExpertSection: React.FC = () => (
  <div data-testid="expert-section" className={styleExpertSection.expert}>
    <div className={styleExpertSection["expert-position"]}>
      <div className={styleExpertSection["expert-title"]}>
        <Text size={SizeType.large} text="DMM Expert Podcast Interviews" />
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
