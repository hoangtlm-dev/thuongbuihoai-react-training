import useSWR from "swr";
import React, { useContext, useEffect } from "react";
import { Blogs } from "@common-types/blog";
import { BLOG_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import { DataContext } from "@context/DataContext";
import CardBlog from "../CardBlog/CardBlog";
import styleBlogList from "./blogList.module.css";

const BlogList = () => {
  const { blogs, setBlogs } = useContext(DataContext);
  const { data } = useSWR(BLOG_URL, getData<Blogs[]>);

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  const arrBlog = blogs?.slice(0, 3);
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
