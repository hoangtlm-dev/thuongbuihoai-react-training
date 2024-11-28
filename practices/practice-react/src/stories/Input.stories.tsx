import Input from "@components/common/Input/Input";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const TemplateInput: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);

export const InputCart = TemplateInput.bind({});
InputCart.args = {
  type: "text",
  placeholder: "Email address"
};