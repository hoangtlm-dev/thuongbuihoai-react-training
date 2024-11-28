import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Banner } from "@components/common";
import { IMAGE } from "@constants/image";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Banner",
  component: Banner,
} as ComponentMeta<typeof Banner>;

const TemplateBanner: ComponentStory<typeof Banner> = (args) => (
  <Banner {...args} />
);

export const BannerUrl = TemplateBanner.bind({});
BannerUrl.args = {
  url: IMAGE.url,
  text: "Home page",
  alt: "This is home page",
};
