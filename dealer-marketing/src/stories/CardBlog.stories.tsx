import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BLOG_MOCKING } from "@constants/blog";
import CardBlog from "@components/CardBlog";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CardBlog",
  component: CardBlog,
} as ComponentMeta<typeof CardBlog>;

const TemplateCardBlog: ComponentStory<typeof CardBlog> = (args) => (
  <CardBlog {...args} />
);

export const CardBlogRegular = TemplateCardBlog.bind({});
CardBlogRegular.args = {
  blog: BLOG_MOCKING,
};
