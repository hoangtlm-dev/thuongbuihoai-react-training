import CartBlog from "@src/components/CartBlog/CartBlog";
import React from "react";
import ResearchSection from "../ResearchSection";

const MainSection = () => {
  return (
    <div className="container">
      <ResearchSection layout="center" />
      <CartBlog />
    </div>
  );
};

export default MainSection;
