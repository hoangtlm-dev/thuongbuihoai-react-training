import { ComponentStory, ComponentMeta } from "@storybook/react";
import { PRODUCT_MOCKING } from "@__mocks__/constants/product";
import { BrowserRouter } from "react-router-dom";
import ProductGridCard from "@components/ProductGridCard/ProductGridCard";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/ProductGridCard",
  component: ProductGridCard,
} as ComponentMeta<typeof ProductGridCard>;

const TemplateProductGridCard: ComponentStory<typeof ProductGridCard> = (
  args
) => (
  <BrowserRouter>
    <ProductGridCard {...args} />
  </BrowserRouter>
);

export const Default = TemplateProductGridCard.bind({});
Default.args = {
  product: PRODUCT_MOCKING,
  deleteProduct: () => {},
};
