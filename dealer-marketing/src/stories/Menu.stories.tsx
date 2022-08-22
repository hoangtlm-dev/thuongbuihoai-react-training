import { Menu } from "@components/common";
import { MENU_CONTACT, MENU_LIST, MENU_SERVICES } from "@constants/menu";
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

export const MenuList = TemplateMenu.bind({});
MenuList.args = {
  menuList: MENU_LIST,
};

export const MenuService = TemplateMenu.bind({});
MenuService.args = {
  menuList: MENU_SERVICES,
};

export const MenuContact = TemplateMenu.bind({});
MenuContact.args = {
  menuList: MENU_CONTACT,
};
