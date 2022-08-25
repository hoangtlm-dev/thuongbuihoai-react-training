import React, { memo } from "react";
import { Blog, ClassNameType, LayoutContentType } from "@common-types/blog";
import ResearchSection from "@sections/ResearchSection";
import { BLOG_MOCKING } from "@constants/blog";

interface CartBlogProps {
  blog: Blog;
}

const CardBlog: React.FC<CartBlogProps> = ({ blog = BLOG_MOCKING }) => (
  <ResearchSection
    blog={blog}
    content={LayoutContentType.left}
    layout={ClassNameType.grid}
    isButton={false}
    imageSmall={true}
  />
);

export default memo(CardBlog);
