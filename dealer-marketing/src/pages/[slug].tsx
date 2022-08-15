import React from "react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// common-types
import { Blog } from "@common-types/blog";

// components
import { Banner, Navigation, Text } from "@components/common";

import { BLOG_RESPONSE_DATA } from "@api-backup/blogResponseData";
import Layout from "@layouts";
import style from "../styles/base/common.module.css";
import CustomImage from "@components/common/CustomImage";
import { TextType } from "@components/common/Text";

interface BlogProps {
  blog: Blog;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  // const blogs = await axios.get(BLOG_URL);
  const blogs: Blog[] = BLOG_RESPONSE_DATA;

  const paths = blogs.map((blog: Blog) => {
    return {
      params: { slug: blog.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  // const res = await axios.get(BLOG_URL + "?slug=" + slug);
  const res = BLOG_RESPONSE_DATA.filter((item) => item.slug == slug);

  return {
    props: {
      blog: res[0],
    },
  };
};

const BlogDetail: React.FC<BlogProps> = ({ blog }) => {
  const {
    title = "",
    expertId = "",
    createDate = "",
    description = "",
    image = { url: "/images/past-present-future.png", alt: "" },
  } = blog ? blog : {};

  return (
    <Layout>
      <Navigation />
      <Banner
        url={image.url}
        text=""
        blurDataURL="/images/backgrounds/blur.jpg"
      />
      <div itemScope itemType="https://schema.org/Blog" className="container">
        <div className={style["style-info"]}>
          <div className={style["style-card"]}>
            <div className={style["style-title"]}>
              <Text size={TextType.largeDark} text={title} />
            </div>
            <hr />
            <div className={style["style-author"]}>
              <figure>
                <CustomImage
                  url={image.url}
                  alt={image.alt}
                  width={60}
                  height={60}
                  className={style["style-image"]}
                />
              </figure>
              <div className={style["style-funeral"]}>
                <p>
                  by <span>{expertId}</span>
                </p>
                <p>{createDate}</p>
              </div>
            </div>
          </div>
          <hr />
          <div className={style["style-info-regular"]}>
            <Text size={TextType.regular} text={description} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
