import useSWR from "swr";
import React, { lazy, Suspense } from "react";

// components
const Navigation = lazy(() => import("@components/common/Navigation"));
import { Loader } from "@components/common";
import CardBlog from "@components/CardBlog";

// common-types
import { Blog } from "@self-types/blog";

// layouts
import Layout from "@layouts/index";

// constants
import { API_BLOGS } from "@constants/url";

// helpers
import { getData } from "@helpers/fetchApi";
import styleBlogPage from "./blogPage.module.css";

const BlogPage: React.FC = () => {
  const { data } = useSWR(API_BLOGS, getData<Blog[]>);

  return (
    <Layout>
      <div className={styleBlogPage["blog-page"]}>
        <div className={styleBlogPage["blog-navigation"]}>
          <Suspense fallback={<Loader />}>
            <Navigation />
          </Suspense>
        </div>
        <h2 className={styleBlogPage["blog-heading"]}>The Blogs Panel</h2>
        <div className={styleBlogPage["blog-list"]}>
          <Suspense fallback={<Loader />}>
            {data?.map((blog: Blog) => (
              <div className={styleBlogPage["blog-item"]} key={blog.blogId}>
                <CardBlog blog={blog} />
              </div>
            ))}
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
