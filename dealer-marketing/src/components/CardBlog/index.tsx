import React, { memo } from "react";
import { Blog, BlogLayoutType, BlogContentType } from "@self-types/blog";
import { BLOG_MOCKING } from "@constants/blog";
import Card from "@components/Card";

interface CartBlogProps {
  blog: Blog;
}

const CardBlog: React.FC<CartBlogProps> = ({ blog = BLOG_MOCKING }) => (
  <Card
    blog={blog}
    content={BlogContentType.left}
    layout={BlogLayoutType.grid}
    hasButton={false}
    imageSmall={true}
  />
);

export default memo(CardBlog);
