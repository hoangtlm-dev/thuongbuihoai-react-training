import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Input } from "@components/common";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const TemplateInput: ComponentStory<typeof Input> = (args) => (
  <Input {...args} onChange={action("onChang value")} />
);

export const InputText = TemplateInput.bind({});
InputText.args = {
  placeholder: "You're email...",
  type: "text",
};

export const InputNumber = TemplateInput.bind({});
InputNumber.args = {
  placeholder: "123...",
  type: "number",
};
