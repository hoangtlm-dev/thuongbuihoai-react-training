import Counter from "@components/common/Counter/Counter";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Counter",
  component: Counter,
} as ComponentMeta<typeof Counter>;

const TemplateCounter: ComponentStory<typeof Counter> = (args) => (
  <Counter {...args} />
);

export const Primary = TemplateCounter.bind({});