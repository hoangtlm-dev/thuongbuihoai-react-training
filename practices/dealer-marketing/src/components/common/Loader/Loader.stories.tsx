import { Loader } from "@components/common";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Loader",
  component: Loader,
} as ComponentMeta<typeof Loader>;

const TemplateLoader: ComponentStory<typeof Loader> = (args) => (
  <Loader {...args} />
);

export const LoaderUrl = TemplateLoader.bind({});
