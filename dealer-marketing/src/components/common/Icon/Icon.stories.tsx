import { ComponentStory, ComponentMeta } from "@storybook/react";
import { IconType } from "@components/common/Icon";
import { Icon } from "@components/common";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const TemplateIcon: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const IconSearch = TemplateIcon.bind({});
IconSearch.args = {
  iconName: IconType.search,
};
