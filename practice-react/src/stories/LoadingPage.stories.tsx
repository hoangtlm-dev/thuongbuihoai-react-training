import LoadingPage from "@components/common/LoadingPage/LoadingPage";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/LoadingPage",
  component: LoadingPage,
} as ComponentMeta<typeof LoadingPage>;

const TemplateLoadingPage: ComponentStory<typeof LoadingPage> = (args) => (
  <LoadingPage {...args} />
);

export const LoadingPageCart = TemplateLoadingPage.bind({});