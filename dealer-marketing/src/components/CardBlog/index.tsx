import React from "react";
import { Blog } from "@common-types/blog";
import ResearchSection from "@sections/ResearchSection";
import styleCardBlog from "./cardBlog.module.css";

interface CartBlogProps {
  blog: Blog;
}

const CartBlog: React.FC<CartBlogProps> = ({
  blog = {
    blogId: "1",
    title:
      "Exploring Influential and Impactful Automotive Advertising Campaigns",
    slug: "exploring-influential-and-impactful-automotive-advertising-campaigns",
    createDate: "July 28, 2022",
    expertId: "Donna Welker",
    image: {
      url: "/images/past-present-future.png",
      alt: "This is image past present future",
    },
    description:
      "Advertising has come a long way since its humble beginnings. There's no doubt about it – marketing remains an ever-changing landscape: What worked a few years ago may not be effective today, and what's popular now may be out of style in a few months. Nowhere is this more relevant than in the automotive industry, where new campaigns hold the potential to make or break a company. This article will explore some disruptive and impactful automotive marketing campaigns throughout the past century. We'll explore what made them successful and see how they changed the marketing landscape forever.",
  },
}) => (
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
