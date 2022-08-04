import React from "react";
import { Blogs } from "@common-types/blog";
import ResearchSection from "@sections/ResearchSection/ResearchSection";
import styleCardBlog from "./cardBlog.module.css";

interface CartBlogProps {
  blog: Blogs;
}

const CartBlog: React.FC<CartBlogProps> = ({ blog }) => {
  return (
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
};

export default CartBlog;
