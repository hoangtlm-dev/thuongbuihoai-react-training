import React, { memo } from "react";
import { BlogList } from "@components/index";
import { BLOG_MOCKING } from "@constants/blog";
import { BlogLayoutType } from "types/blog";
import ContactSection from "@sections/ContactSection";
import ExpertSection from "@sections/ExpertSection";
import Card from "@components/Card";

const MainSection: React.FC = () => (
  <div data-testid="main-section" className="container">
    <Card layout={BlogLayoutType.center} blog={BLOG_MOCKING} />
    <BlogList />
    <ContactSection />
    <ExpertSection />
    <BlogList />
  </div>
);

export default memo(MainSection);
