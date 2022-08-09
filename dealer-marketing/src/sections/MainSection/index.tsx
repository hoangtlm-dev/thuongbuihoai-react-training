import React from "react";
import { BlogList } from "@components";
import ContactSection from "@sections/ContactSection";
import ExpertSection from "@sections/ExpertSection";
import ResearchSection from "@sections/ResearchSection";
import { BLOG_MOCKING } from "@constants/blog";

const MainSection = () => (
  <div className="container">
    <ResearchSection layout="center" blog={BLOG_MOCKING} />
    <BlogList />
    <ContactSection />
    <ExpertSection />
    <BlogList />
  </div>
);

export default MainSection;
