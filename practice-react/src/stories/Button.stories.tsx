import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
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

export const ButtonLight = TemplateButton.bind({});
ButtonLight.args = {
  text: "Sign Up",
  type: "light",
};

export const ButtonDark = TemplateButton.bind({});
ButtonDark.args = {
  text: "Sign Up",
  type: "dark",
};

export const ButtonLarge = TemplateButton.bind({});
ButtonLarge.args = {
  text: "Sign Up",
  type: "large",
};

export const ButtonOutlineLight = TemplateButton.bind({});
ButtonOutlineLight.args = {
  text: "Login",
  type: "outline-light",
};

export const ButtonOutlineDark = TemplateButton.bind({});
ButtonOutlineDark.args = {
  text: "Login",
  type: "outline-dark",
};

export const ButtonDisable = TemplateButton.bind({});
ButtonDisable.args = {
  text: "Submit",
  type: "large",
  disabled: true,
};
