import React from "react";
import { Blog } from "@common-types/blog";
import ResearchSection from "@sections/ResearchSection";
import styleCardBlog from "./cardBlog.module.css";

interface CartBlogProps {
  blog: Blog;
}

const CartBlog: React.FC<CartBlogProps> = ({ blog }) => (
  <div className={styleCardBlog["cart-blog"]}>
    <ResearchSection
      blog={blog}
      content="left"
      layout="gird"
      isButton={false}
      imageSmall={true}
    />
  </div>
);

export default CartBlog;
