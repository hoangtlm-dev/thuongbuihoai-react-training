import { ComponentStory, ComponentMeta } from "@storybook/react";
import Price from "@components/Price/Price";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Price",
  component: Price,
} as ComponentMeta<typeof Price>;

const TemplatePrice: ComponentStory<typeof Price> = (args) => (
  <Price {...args} />
);
export const Default = TemplatePrice.bind({});
Default.args = {
  value: 0,
};
