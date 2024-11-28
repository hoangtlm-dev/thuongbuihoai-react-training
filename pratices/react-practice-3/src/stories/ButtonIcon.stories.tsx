import ButtonIcon from "@components/common/Button/ButtonIcon/ButtonIcon";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/ButtonIcon",
  component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>;

const TemplateButtonIcon: ComponentStory<typeof ButtonIcon> = (args) => <ButtonIcon {...args} />;

export const ButtonDelete = TemplateButtonIcon.bind({});
ButtonDelete.args = {
  children: <i className="fa fa-trash"></i>,
  type: "delete"
}

export const ButtonUpdate = TemplateButtonIcon.bind({});
ButtonUpdate.args = {
  children: <i className="fa fa-pen"></i>,
  type: "update"
}
