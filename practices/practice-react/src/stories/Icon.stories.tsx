import Icon from "@components/common/Icon/Icon";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const TemplateIcon: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);

export const iconCart = TemplateIcon.bind({});
iconCart.args = {
  iconName: "cart",
};

export const iconFilter = TemplateIcon.bind({});
iconFilter.args = {
  iconName: "filter",
};

export const iconMinus = TemplateIcon.bind({});
iconMinus.args = {
  iconName: "minus",
};

export const iconPlus = TemplateIcon.bind({});
iconPlus.args = {
  iconName: "plus",
};

export const iconFb = TemplateIcon.bind({});
iconFb.args = {
  iconName: "fb",
};

export const iconTwitter = TemplateIcon.bind({});
iconTwitter.args = {
  iconName: "twitter",
};

export const iconInstagram = TemplateIcon.bind({});
iconInstagram.args = {
  iconName: "instagram",
};