import { ComponentStory, ComponentMeta } from "@storybook/react";
import Title from "@components/common/Title/Title";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Title",
  component: Title,
} as ComponentMeta<typeof Title>;

const TemplateTitle: ComponentStory<typeof Title> = (args) => (
  <Title {...args} />
);

export const Default = TemplateTitle.bind({});
Default.args = {
  text: "BLACK FOREST",
};
