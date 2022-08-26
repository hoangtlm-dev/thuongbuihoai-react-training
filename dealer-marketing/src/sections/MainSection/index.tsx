import React, { memo } from "react";
import { BlogList } from "@components";
import ContactSection from "@sections/ContactSection";
import ExpertSection from "@sections/ExpertSection";
import ResearchSection from "@sections/ResearchSection";
import { BLOG_MOCKING } from "@constants/blog";
import { BlogLayoutType } from "@common-types/blog";

const MainSection: React.FC = () => (
  <div data-testid="main-section" className="container">
    <ResearchSection layout={BlogLayoutType.center} blog={BLOG_MOCKING} />
    <BlogList />
    <ContactSection />
    <ExpertSection />
    <BlogList />
  </div>
);

export default memo(MainSection);
