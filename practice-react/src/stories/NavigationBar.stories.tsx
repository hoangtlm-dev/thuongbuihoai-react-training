import NavigationBar from "@components/common/NavigationBar/NavigationBar";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/NavigationBar",
  component: NavigationBar,
} as ComponentMeta<typeof NavigationBar>;

const TemplateNavigationBar: ComponentStory<typeof NavigationBar> = (args) => (
  <BrowserRouter>
    <NavigationBar {...args} />
  </BrowserRouter>
);
export const Default = TemplateNavigationBar.bind({});
