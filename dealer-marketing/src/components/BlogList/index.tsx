import Error from "next/error";
import React, { lazy, memo, Suspense, useContext } from "react";
import { BlogContext } from "@context/BlogContext";
import { ErrorBoundary, Loader } from "@components/common";
import styleBlogList from "./blogList.module.css";
const CardBlog = lazy(() => import("../CardBlog"));

const BlogList: React.FC = () => {
  const { errorCode, blogList } = useContext(BlogContext);
  const arrBlog = blogList?.slice(0, 3);

  if (errorCode) {
    return <Error statusCode={errorCode} />;
  }

  return (
    <ErrorBoundary>
      <div data-testid="blog-list" className={styleBlogList["blog-list"]}>
        {arrBlog?.map((blog) => (
          <div key={blog.blogId}>
            <Suspense fallback={<Loader />}>
              <CardBlog blog={blog} />
            </Suspense>
          </div>
        ))}
      </div>
    </ErrorBoundary>
  );
};

export default memo(BlogList);
