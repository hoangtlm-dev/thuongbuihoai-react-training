import React, { memo } from "react";
import { Blog, BlogLayoutType, BlogContentType } from "@common-types/blog";
import ResearchSection from "@sections/ResearchSection";
import { BLOG_MOCKING } from "@constants/blog";

interface CartBlogProps {
  blog: Blog;
}

const CardBlog: React.FC<CartBlogProps> = ({ blog = BLOG_MOCKING }) => (
  <ResearchSection
    blog={blog}
    content={BlogContentType.left}
    layout={BlogLayoutType.grid}
    isButton={false}
    imageSmall={true}
  />
);

export default memo(CardBlog);
