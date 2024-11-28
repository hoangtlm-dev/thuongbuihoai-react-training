import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { PRODUCT_MOCKING } from "@__mocks__/constants/product";
import ProductListCard from "@components/ProductListCard/ProductListCard";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/ProductListCard",
  component: ProductListCard,
} as ComponentMeta<typeof ProductListCard>;

const TemplateProductListCard: ComponentStory<typeof ProductListCard> = (
  args
) => (
  <BrowserRouter>
    <ProductListCard {...args} />
  </BrowserRouter>
);

export const Default = TemplateProductListCard.bind({});
Default.args = {
  product: PRODUCT_MOCKING,
};
