import React, { useMemo } from "react";
import Image from "next/image";
import Button from "@src/components/common/Button/Button";
import Text from "@src/components/common/Text/Text";
import styleResearch from "./researchSection.module.css";

interface ResearchProps {
  layout?: string;
  content?: string;
  imageSmall?: boolean;
  isButton?: boolean;
}

const ResearchSection: React.FC<ResearchProps> = ({
  layout = "center",
  imageSmall = false,
  content = "center",
  isButton = true,
}) => {
  const layoutContent = useMemo(() => {
    switch (content) {
      case "center":
        return "research-center";
      case "left":
        return "research-left";
      default:
        return "";
    }
  }, [content]);

  const className = useMemo(() => {
    switch (layout) {
      case "center":
        return "research";
      case "gird":
        return "research-gird";
      default:
        return "";
    }
  }, [layout]);

  return (
    <div className={styleResearch[className]}>
      <div className={styleResearch["research-info"]}>
        {imageSmall ? (
          <Image
            src="/images/past-present-future.avif"
            alt="This is image past present future"
            className={styleResearch["research-image"]}
            width={350}
            height={210}
          />
        ) : (
          <Image
            src="/images/past-present-future.avif"
            alt="This is image past present future"
            className={styleResearch["research-image"]}
            width={730}
            height={438}
          />
        )}
        <div className={styleResearch[layoutContent]}>
          <p className={styleResearch["research-title"]}>Research & analysis</p>
          <div className={styleResearch["research-heading"]}>
            <Text
              size="medium"
              text="Exploring Influential and Impactful Automotive Advertising Campaigns"
            />
          </div>
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
            {isButton ? <Button type="primary" text="Read more" /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
