import axios from "axios";
import React, { lazy, Suspense } from "react";
import Image from "next/image";
import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

// common-types
import { Blog } from "@self-types/blog";

// components
const Navigation = lazy(() => import("@components/common/Navigation"));
const Banner = lazy(() => import("@components/common/Banner"));
const Text = lazy(() => import("@components/common/Text"));
import { SizeType, ThemeType } from "@components/common/Text";
import { Loader } from "@components/common";

// constants
import { IMAGE } from "@constants/image";
import { BLOGS_URL } from "@constants/url";

// layouts
import Layout from "@layouts/index";
import style from "./style.module.css";

interface BlogProps {
  blog: Blog;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths = async () => {
  const res = await axios.get(BLOGS_URL);
  const blogs = res.data;

  const paths = blogs.map((blog: Blog) => {
    return {
      params: { slug: blog.slug },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const res = await axios.get(BLOGS_URL);
  const blogs = res.data.filter((item: Blog) => item.slug == slug);

  return {
    props: {
      blog: blogs[0],
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
      <Suspense fallback={<Loader />}>
        <Navigation />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <Banner url={image.url} />
      </Suspense>
      <div className="container">
        <div className={style["blog-detail-info"]}>
          <div className={style["blog-detail-card"]}>
            <div className={style["blog-detail-title"]}>
              <Suspense fallback={<Loader />}>
                <Text theme={ThemeType.dark} text={title} />
              </Suspense>
            </div>
            <hr />
            <div className={style["blog-detail-author"]}>
              <Image
                src={image.url}
                alt={image.alt}
                width={60}
                height={60}
                className={style["blog-detail-image"]}
                placeholder="blur"
                blurDataURL={IMAGE.blurDataURL}
              />
              <div className={style["blog-detail-funeral"]}>
                <p>
                  by <span>{expertId}</span>
                </p>
                <Suspense fallback={<Loader />}>
                  <Text theme={ThemeType.primary} text={createDate} />
                </Suspense>
              </div>
            </div>
          </div>
          <hr />
          <Suspense fallback={<Loader />}>
            <Text size={SizeType.regular} text={description} />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
