import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BlogContentType, BlogLayoutType } from "@common-types/blog";
import { BLOG_MOCKING } from "@constants/blog";
import ResearchSection from "@sections/ResearchSection";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/ResearchSection",
  component: ResearchSection,
} as ComponentMeta<typeof ResearchSection>;

const TemplateResearchSection: ComponentStory<typeof ResearchSection> = (
  args,
) => <ResearchSection {...args} />;

export const ResearchSectionRegular = TemplateResearchSection.bind({});
ResearchSectionRegular.args = {
  blog: BLOG_MOCKING,
  layout: BlogLayoutType.center,
  content: BlogContentType.center,
};

export const CardBlog = TemplateResearchSection.bind({});
CardBlog.args = {
  isButton: false,
  blog: BLOG_MOCKING,
  layout: BlogLayoutType.grid,
  content: BlogContentType.left,
};
