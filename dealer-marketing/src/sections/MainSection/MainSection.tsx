import React from "react";
import BlogList from "@src/components/BlogList/BlogList";
import ResearchSection from "../ResearchSection";

const MainSection = () => {
  return (
    <div className="container">
      <ResearchSection layout="center" />
      <BlogList />
    </div>
  );
};

export default MainSection;
