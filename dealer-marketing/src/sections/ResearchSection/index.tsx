import React from "react";
import { useRouter } from "next/router";
import { Blog } from "@common-types/blog";
import { Button, Text } from "@components/common";
import Image from "next/image";
import styleResearch from "./researchSection.module.css";

interface ResearchProps {
  layout?: string;
  content?: string;
  imageSmall?: boolean;
  isButton?: boolean;
  blog?: Blog;
}

const layoutContentType = {
  center: "research-center",
  left: "research-left",
};

const classNameType = {
  center: "research",
  gird: "research-gird",
};

const ResearchSection: React.FC<ResearchProps> = ({
  layout = "center",
  imageSmall = false,
  content = "center",
  isButton = true,
  blog = {
    createDate: "July 28, 2022",
    description:
      "A look at the past, present and future of disruptive marketing in the auto industry Advertising has come a long way since its humble beginnings. There's no doubt about it – marketing remains an ever-changing landscape: What worked a few years ago may not be effective today, and what's popular now may be out of style in a few months....",
    expertId: "Donna Welker",
    image: {
      url: "",
      alt: "",
    },
    title:
      "Exploring Influential and Impactful Automotive Advertising Campaigns",
    slug: "",
  },
}) => {
  const router = useRouter();
  const layoutContent =
    layoutContentType[content as keyof typeof layoutContentType] || "";
  const className = classNameType[layout as keyof typeof classNameType] || "";

  return (
    <div className={styleResearch[className]}>
      <div className={styleResearch["research-info"]}>
        {imageSmall ? (
          <Image
            src={blog?.image.url}
            alt={blog?.image.alt}
            className={styleResearch["research-image"]}
            width={350}
            height={210}
            placeholder="blur"
            blurDataURL="/images/backgrounds/blur.jpg"
          />
        ) : (
          <Image
            src="/images/past-present-future.avif"
            alt="This is image past present future"
            className={styleResearch["research-image"]}
            width={730}
            height={438}
            placeholder="blur"
            blurDataURL="/images/backgrounds/blur.jpg"
          />
        )}
        <div className={styleResearch[layoutContent]}>
          <p className={styleResearch["research-title"]}>Research & analysis</p>
          <div className={styleResearch["research-heading"]}>
            <a onClick={() => router.push(`/${blog?.slug}`)}>
              <Text size="mediumOutline" text={blog?.title} />
            </a>
          </div>
          <p className={styleResearch["research-description"]}>
            By{" "}
            <span className={styleResearch["research-author"]}>
              {blog.expertId}{" "}
            </span>
            - <span>{blog?.createDate}</span>
          </p>
          <Text size="normal" text={blog?.description} />
          <div className={styleResearch["research-button"]}>
            {isButton ? <Button type="primary" text="Read more" /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchSection;
