import React from "react";
import { BlogList } from "@components";
import ContactSection from "@sections/ContactSection";
import ExpertSection from "@sections/ExpertSection";
import ResearchSection from "@sections/ResearchSection";

const MainSection = () => (
  <div className="container">
    <ResearchSection layout="center" />
    <BlogList />
    <ContactSection />
    <ExpertSection />
    <BlogList />
  </div>
);

export default MainSection;
