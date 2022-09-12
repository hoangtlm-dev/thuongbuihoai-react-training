import { Menu } from "@components/common";
import { ROUTER_LIST } from "@constants/routes";
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
  menuList: ROUTER_LIST,
};
