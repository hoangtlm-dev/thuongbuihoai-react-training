import React, { memo } from "react";
import Image from "next/image";
import { Button, Text } from "@components/common";
import { Blog, BlogLayoutType, BlogContentType } from "@self-types/blog";
import { Expert } from "@self-types/expert";
import { ButtonType } from "@components/common/Button";
import { EXPERT_MOCKING } from "@constants/expert";
import { IMAGE } from "@constants/image";
import { SizeType, ThemeType } from "@components/common/Text";
import CustomLink from "@components/common/CustomLink";
import styleResearch from "./card.module.css";

interface CardProps {
  layout?: string;
  content?: string;
  imageSmall?: boolean;
  hasButton?: boolean;
  blog: Blog;
  expert?: Expert;
}

const Card: React.FC<CardProps> = ({
  imageSmall = false,
  layout = BlogLayoutType.center,
  content = BlogContentType.center,
  hasButton = true,
  blog,
  expert = EXPERT_MOCKING,
}) => {
  return (
    <div
      data-testid="research-section"
      className={styleResearch[`research-${layout}`]}>
      <div className={styleResearch["research-info"]}>
        {imageSmall ? (
          <Image
            src={blog?.image.url}
            alt={blog?.image.alt}
            className={styleResearch["research-image"]}
            width={350}
            height={210}
            placeholder="blur"
            blurDataURL={IMAGE.blurDataURL}
          />
        ) : (
          <Image
            src="/images/past-present-future.png"
            alt="This is image past presents future"
            className={styleResearch["research-image"]}
            width={730}
            height={438}
            placeholder="blur"
            blurDataURL={IMAGE.blurDataURL}
          />
        )}
        <div className={styleResearch[`research-${content}`]}>
          <div className={styleResearch["research-title"]}>
            <Text text="Research & analysis" />
          </div>
          <div className={styleResearch["research-content"]}>
            <div className={styleResearch["research-heading"]}>
              <CustomLink
                href={`/${blog?.slug}`}
                children={<Text theme={ThemeType.light} text={blog?.title} />}
              />
            </div>
            <div className={styleResearch["research-description"]}>
              <Text
                text={`
                  By${" "}
                  <Link href={"/expert-page/${expert.slug}"}>
                    <span class=${styleResearch["research-author"]}>
                      ${blog.expertId + " "}
                    </span>
                  </Link>
                  - <span>${blog?.createDate}</span>
                  `}
              />
            </div>
            <Text size={SizeType.normal} text={blog?.description} />
          </div>
          <div className={styleResearch["research-button"]}>
            {hasButton ? (
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

export default memo(Card);
