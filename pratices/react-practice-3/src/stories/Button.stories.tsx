import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "@components/common/Button/Button/Button";
import { action } from '@storybook/addon-actions';

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
  text: "Order online",
  type: "primary",
};

export const ButtonOutline = TemplateButton.bind({});
ButtonOutline.args = {
  text: "Add new product",
  type: "info",
};

export const ButtonCancel = TemplateButton.bind({});
ButtonCancel.args = {
  text: "Cancel",
  type: "warning",
};

export const ButtonSubmit = TemplateButton.bind({});
ButtonSubmit.args = {
  text: "Submit",
  type: "success",
};

export const ButtonDisabled = TemplateButton.bind({});
ButtonDisabled.args = {
  text: "Submit",
  type: "success",
  disabled: true,
};
