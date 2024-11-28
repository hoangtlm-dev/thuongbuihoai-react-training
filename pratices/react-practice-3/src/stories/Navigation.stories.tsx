import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navigation from "@components/common/Navigation/Navigation";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Navigation",
  component: Navigation,
} as ComponentMeta<typeof Navigation>;

const TemplateNavigation: ComponentStory<typeof Navigation> = () => (
  <Navigation />
);
export const Default = TemplateNavigation.bind({});
