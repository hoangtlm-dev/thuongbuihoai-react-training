import React from "react";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// common-types
import { Blog } from "@common-types/blog";

// components
import { Banner, Navigation, Text } from "@components/common";

import { BLOG_RESPONSE_DATA } from "@api-backup/blogResponseData";
import CustomImage from "@components/common/CustomImage";
import { TextType } from "@components/common/Text";
import Layout from "@layouts";
import style from "./style.module.css";

interface BlogProps {
  blog: Blog;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
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
      <Banner url={image.url} text="" />
      <div itemScope itemType="https://schema.org/Blog" className="container">
        <div className={style["blog-detail-info"]}>
          <div className={style["blog-detail-card"]}>
            <div className={style["blog-detail-title"]}>
              <Text size={TextType.largeDark} text={title} />
            </div>
            <hr />
            <div className={style["blog-detail-author"]}>
              <figure>
                <CustomImage
                  url={image.url}
                  alt={image.alt}
                  width={60}
                  height={60}
                  className={style["blog-detail-image"]}
                />
              </figure>
              <div className={style["blog-detail-funeral"]}>
                <p>
                  by <span>{expertId}</span>
                </p>
                <p>{createDate}</p>
              </div>
            </div>
          </div>
          <hr />
          <Text size={TextType.regular} text={description} />
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
