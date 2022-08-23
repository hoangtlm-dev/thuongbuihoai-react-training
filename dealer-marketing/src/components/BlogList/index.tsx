import React, { memo, useContext } from "react";
import Error from "next/error";
import { BlogContext } from "@context/BlogContext";
import CardBlog from "../CardBlog";
import styleBlogList from "./blogList.module.css";

const BlogList: React.FC = () => {
  const { errorCode, blogList } = useContext(BlogContext);
  const arrBlog = blogList?.slice(0, 3);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <div data-testid="blog-list" className={styleBlogList["blog-list"]}>
      {arrBlog?.map((blog) => (
        <div key={blog.blogId}>
          <CardBlog blog={blog} />
        </div>
      ))}
    </div>
  );
};

export default memo(BlogList);
