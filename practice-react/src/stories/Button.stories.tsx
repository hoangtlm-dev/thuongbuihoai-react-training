import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import Button from "@components/common/Button/Button";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const TemplateButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={action("onClick")} />
);

export const Primary = TemplateButton.bind({});
Primary.args = {
  text: "Add to cart",
  type: "primary",
};

export const ButtonSecondary = TemplateButton.bind({});
ButtonSecondary.args = {
  text: "Sign Up",
  type: "secondary",
};

export const ButtonOutline = TemplateButton.bind({});
ButtonOutline.args = {
  text: "Sign Up",
  type: "outline",
};