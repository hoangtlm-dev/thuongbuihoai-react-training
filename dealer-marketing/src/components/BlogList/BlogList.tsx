import React from "react";
import useSWR from "swr";
import { Blogs } from "@common-types/blog";
import { BLOG_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import CardBlog from "../CardBlog/CardBlog";
import styleBlogList from "./blogList.module.css";

const BlogList = () => {
  const { data } = useSWR(BLOG_URL, getData<Blogs[]>);
  const arrBlog = data?.slice(0, 3);
  return (
    <div className={styleBlogList["blog-list"]}>
      {arrBlog?.map((blog) => (
        <div key={blog.blogId}>
          <CardBlog blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
