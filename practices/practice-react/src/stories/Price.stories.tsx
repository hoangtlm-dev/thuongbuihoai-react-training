import Price from "@components/common/Price/Price";
import { ComponentStory, ComponentMeta } from "@storybook/react";

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

export const PriceOriginal = TemplatePrice.bind({});
PriceOriginal.args = {
  currency: "$",
  value: 100,
  type: "original"
};

export const PriceDiscount = TemplatePrice.bind({});
PriceDiscount.args = {
  currency: "$",
  value: 150,
  type: "discount"
};