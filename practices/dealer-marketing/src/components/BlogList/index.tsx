import Error from "next/error";
import React, { memo, useContext } from "react";
import { BlogContext } from "@context/BlogContext";
import { ErrorBoundary, Loader, Text } from "@components/common";
import styleBlogList from "./blogList.module.css";
import CardBlog from "../CardBlog";

const BlogList: React.FC = () => {
  const { errorCode, blogList, isLoading } = useContext(BlogContext);
  const arrBlog = blogList?.slice(0, 3);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <ErrorBoundary>
      <div data-testid="blog-list" className={styleBlogList["blog-list"]}>
        {isLoading ? (
          <Loader />
        ) : arrBlog?.length !== 0 ? (
          <>
            {arrBlog?.map((blog) => (
              <div key={blog.blogId}>
                <CardBlog blog={blog} />
              </div>
            ))}
          </>
        ) : (
          <div className={styleBlogList["blog-title"]}>
            <Text text="There are no matching results !" />
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default memo(BlogList);
