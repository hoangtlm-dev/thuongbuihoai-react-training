import React, { memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Text } from "@components/common";
import { Blog, BlogLayoutType, BlogContentType } from "@common-types/blog";
import { Expert } from "@common-types/expert";
import { ButtonType } from "@components/common/Button";
import { TextType } from "@components/common/Text";
import { EXPERT_MOCKING } from "@constants/expert";
import { IMAGE } from "@constants/image";
import styleResearch from "./card.module.css";

interface CardProps {
  layout?: string;
  content?: string;
  imageSmall?: boolean;
  isButton?: boolean;
  blog: Blog;
  expert?: Expert;
}

const Card: React.FC<CardProps> = ({
  imageSmall = false,
  layout = BlogLayoutType.center,
  content = BlogContentType.center,
  isButton = true,
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

export default memo(Card);
