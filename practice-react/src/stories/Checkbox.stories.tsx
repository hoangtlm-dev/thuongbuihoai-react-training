import Checkbox from "@components/common/Checkbox/Checkbox";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const TemplateCheckbox: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = TemplateCheckbox.bind({});