import Button from "@src/components/common/Button/Button";
import Text from "@src/components/common/Text/Text";
import Image from "next/image";
import React from "react";
import styleResearch from "./researchSection.module.css";

const ResearchSection = () => {
  return (
    <div className="container">
      <div className={styleResearch.research}>
        <div className={styleResearch["research-info"]}>
          <Image
            src="/images/past-present-future.avif"
            alt="This is image past present future"
            className={styleResearch["research-image"]}
            width={730}
            height={438}
          />
          <div className={styleResearch["research-content"]}>
            <p className={styleResearch["research-title"]}>
              Research & analysis
            </p>
            <Text
              size="medium"
              text="Exploring Influential and Impactful Automotive Advertising Campaigns"
            />
            <p className={styleResearch["research-description"]}>
              By{" "}
              <span className={styleResearch["research-author"]}>
                Donna Welker{" "}
              </span>
              - July 28, 2022
            </p>
            <Text
              size="normal"
              text="A look at the past, present and future of disruptive marketing in the auto industry Advertising has come a long way since its humble beginnings. There's no doubt about it – marketing remains an ever-changing landscape: What worked a few years ago may not be effective today, and what's popular now may be out of style in a few months...."
            />
            <div className={styleResearch["research-button"]}>
              <Button type="primary" text="Read more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
