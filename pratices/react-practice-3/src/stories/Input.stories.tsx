import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputValue from "@components/Input/InputValue/InputValue";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/InputValue",
  component: InputValue,
} as ComponentMeta<typeof InputValue>;

const TemplateInputValue: ComponentStory<typeof InputValue> = (args) => <InputValue {...args} />

export const Number = TemplateInputValue.bind({});
Number.args = {
  type: "number",
  min: 0,
  className: "input__number"
}

export const Text = TemplateInputValue.bind({});
Text.args = {
  type: "text",
  className: "input__value"
}

