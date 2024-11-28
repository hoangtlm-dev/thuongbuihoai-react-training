import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MENU_LIST } from "@constants/menu";
import Menu from "@components/common/Menu/Menu";
import { BrowserRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const TemplateMenu: ComponentStory<typeof Menu> = (args) => (
  <BrowserRouter>
    <Menu {...args} />
  </BrowserRouter>
);
export const Default = TemplateMenu.bind({});
Default.args = {
  menuList: MENU_LIST,
};
