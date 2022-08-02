import React from "react";
import ResearchSection from "@src/sections/ResearchSection/ResearchSection";
import styleCartBlog from "./cartBlog.module.css";
import { Blogs } from "@src/common-types/blog";

interface CartBlogProps {
  blog: Blogs;
}

const CartBlog: React.FC<CartBlogProps> = ({ blog }) => {
  return (
    <div className={styleCartBlog["cart-blog"]}>
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
