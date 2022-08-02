import React from "react";
import ResearchSection from "@src/sections/ResearchSection";
import styleCartBlog from "./cartBlog.module.css";

const CartBlog = () => {
  return (
    <div className={styleCartBlog["cart-blog"]}>
      <ResearchSection
        content="left"
        layout="gird"
        isButton={false}
        imageSmall={true}
      />
    </div>
  );
};

export default CartBlog;
