import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonType } from "@components/common/Button";
import { action } from "@storybook/addon-actions";
import { Button } from "@components/common";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const TemplateButton: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={action("onClick action")} />
);

export const Primary = TemplateButton.bind({});
Primary.args = {
  text: "READ MORE",
  type: ButtonType.primary,
};

export const Secondary = TemplateButton.bind({});
Secondary.args = {
  text: "SUBSCRIBE",
  type: ButtonType.secondary,
};

export const ButtonIcon = TemplateButton.bind({});
ButtonIcon.args = {
  text: "",
  type: ButtonType.buttonIcon,
  icon: true,
};

export const ButtonDisable = TemplateButton.bind({});
ButtonDisable.args = {
  text: "Disable",
  type: ButtonType.default,
  disable: true,
};
