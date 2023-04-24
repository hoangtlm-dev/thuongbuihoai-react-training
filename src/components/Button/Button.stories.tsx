import { ComponentStory, ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from ".";

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
};