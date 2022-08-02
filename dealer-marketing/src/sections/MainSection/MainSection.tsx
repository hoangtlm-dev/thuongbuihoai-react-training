import React from "react";
import BlogList from "@src/components/BlogList/BlogList";
import ResearchSection from "../ResearchSection/ResearchSection";
import ContactSection from "../ContactSection/ContactSection";

const MainSection = () => {
  return (
    <div className="container">
      <ResearchSection layout="center" />
      <BlogList />
      <ContactSection />
    </div>
  );
};

export default MainSection;
