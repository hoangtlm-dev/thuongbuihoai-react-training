import { Logo } from "@components/common";
import { IMAGE } from "@constants/image";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Logo",
  component: Logo,
} as ComponentMeta<typeof Logo>;

const TemplateLogo: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const LogoUrl = TemplateLogo.bind({});
LogoUrl.args = {
  url: IMAGE.logoUrl,
};
