import { Menu } from "@components/common";
import { MENU_LIST } from "@constants/menu";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const TemplateMenu: ComponentStory<typeof Menu> = (args) => <Menu {...args} />;

export const MenuUrl = TemplateMenu.bind({});
MenuUrl.args = {
  menuList: MENU_LIST,
};
