import React from "react";
import Link from "next/link";
import { Button, Text } from "@components/common";
import { Blog } from "@common-types/blog";
import { Expert } from "@common-types/expert";
import { ButtonType } from "@components/common/Button";
import { TextType } from "@components/common/Text";
import { EXPERT_MOCKING } from "@constants/expert";
import CustomImage from "@components/common/CustomImage";
import styleResearch from "./researchSection.module.css";

interface ResearchProps {
  layout?: string;
  content?: string;
  imageSmall?: boolean;
  isButton?: boolean;
  blog: Blog;
  expert?: Expert;
}

export enum LayoutContentType {
  center = "center",
  left = "left",
}

export enum ClassNameType {
  center = "section",
  grid = "grid",
}

const ResearchSection: React.FC<ResearchProps> = ({
  imageSmall = false,
  layout = ClassNameType.center,
  content = LayoutContentType.center,
  isButton = true,
  blog,
  expert = EXPERT_MOCKING,
}) => {
  return (
    <div className={styleResearch[`research-${layout}`]}>
      <div className={styleResearch["research-info"]}>
        {imageSmall ? (
          <CustomImage
            url={blog?.image.url}
            alt={blog?.image.alt}
            className={styleResearch["research-image"]}
            width={350}
            height={210}
          />
        ) : (
          <CustomImage
            url="/images/past-present-future.png"
            alt="This is image past presents future"
            className={styleResearch["research-image"]}
            width={730}
            height={438}
          />
        )}
        <div className={styleResearch[`research-${content}`]}>
          <p className={styleResearch["research-title"]}>Research & analysis</p>
          <div className={styleResearch["research-content"]}>
            <div className={styleResearch["research-heading"]}>
              <Link href={`/${blog?.slug}`} passHref>
                <Text size={TextType.mediumOutline} text={blog?.title} />
              </Link>
            </div>
            <div>
              <p className={styleResearch["research-description"]}>
                By{" "}
                <Link href={`/expert-page/${expert.slug}`}>
                  <span className={styleResearch["research-author"]}>
                    {blog.expertId}{" "}
                  </span>
                </Link>
                - <span>{blog?.createDate}</span>
              </p>
              <Text size={TextType.normal} text={blog?.description} />
            </div>
          </div>
          <div className={styleResearch["research-button"]}>
            {isButton ? (
              <Button type={ButtonType.primary} text="Read more" />
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
