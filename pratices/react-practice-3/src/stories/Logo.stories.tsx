import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logo from "@components/common/Logo/Logo";
import url from "@assets/images/logos/logos.png";
import { BrowserRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const TemplateLogo: ComponentStory<typeof Logo> = (args) => (
  <BrowserRouter>
    <Logo {...args} />
  </BrowserRouter>
);
export const Default = TemplateLogo.bind({});
Default.args = {
  src: url,
};
