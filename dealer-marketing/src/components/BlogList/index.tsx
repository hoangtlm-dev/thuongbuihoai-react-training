import useSWR from "swr";
import React, { useContext, useEffect, useMemo } from "react";
import { Blog } from "@common-types/blog";
import { BLOG_URL } from "@constants/url";
import { getData } from "@helpers/fetchApi";
import { DataContext } from "@context/DataContext";
import CardBlog from "../CardBlog";
import styleBlogList from "./blogList.module.css";

const BlogList = () => {
  const { blogs, setBlogs, searchValue } = useContext(DataContext);
  const { data } = useSWR(BLOG_URL, getData<Blog[]>);

  const blogList = useMemo(() => {
    return searchValue
      ? blogs.filter((blog) =>
          blog.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : blogs;
  }, [blogs, searchValue]);

  useEffect(() => {
    setBlogs(data);
  }, [data]);

  const arrBlog = blogList?.slice(0, 3);
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
