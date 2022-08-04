import React from "react";
import { BlogList } from "@components";
import ContactSection from "@sections/ContactSection/ContactSection";
import ExpertSection from "@sections/ExpertSection/ExpertSection";
import ResearchSection from "@sections/ResearchSection/ResearchSection";

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
