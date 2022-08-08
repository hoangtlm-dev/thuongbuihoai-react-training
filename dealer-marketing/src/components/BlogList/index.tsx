import React, { useContext, useMemo } from "react";
import Error from "next/error";
import { Blog } from "@common-types/blog";
import { DataContext } from "@context/DataContext";
import CardBlog from "../CardBlog";
import styleBlogList from "./blogList.module.css";

const BlogList: React.FC = () => {
  const { blogs, errorCode, searchValue } = useContext(DataContext);

  const blogList = useMemo(() => {
    return searchValue
      ? blogs?.filter((blog: Blog) =>
          blog.title.toLowerCase().includes(searchValue.toLowerCase()),
        )
      : blogs;
  }, [blogs, searchValue]);

  const arrBlog = blogList?.slice(0, 3);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

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
