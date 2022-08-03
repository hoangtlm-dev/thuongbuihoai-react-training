import React from "react";
import BlogList from "@src/components/BlogList/BlogList";
import ResearchSection from "../ResearchSection/ResearchSection";
import ContactSection from "../ContactSection/ContactSection";
import ExpertSection from "../ExpertSection/ExpertSection";

const MainSection = () => {
  return (
    <div className="container">
      <ResearchSection layout="center" />
      <BlogList />
      <ContactSection />
      <ExpertSection />
      <BlogList />
    </div>
  );
};

export default MainSection;
