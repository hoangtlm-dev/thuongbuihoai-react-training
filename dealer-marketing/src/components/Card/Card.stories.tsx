import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BlogContentType, BlogLayoutType } from "@common-types/blog";
import { BLOG_MOCKING } from "@constants/blog";
import Card from "../Card";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const TemplateCard: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardBlogCenter = TemplateCard.bind({});
CardBlogCenter.args = {
  blog: BLOG_MOCKING,
  layout: BlogLayoutType.center,
  content: BlogContentType.center,
};

export const CardBlogLeft = TemplateCard.bind({});
CardBlogLeft.args = {
  isButton: false,
  blog: BLOG_MOCKING,
  layout: BlogLayoutType.grid,
  content: BlogContentType.left,
};
