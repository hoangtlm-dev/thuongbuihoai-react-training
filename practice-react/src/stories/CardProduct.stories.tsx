import CardProduct from "@components/CardProduct/CardProduct";
import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CardProduct",
  component: CardProduct,
} as ComponentMeta<typeof CardProduct>;

const TemplateCardProduct: ComponentStory<typeof CardProduct> = (args) => (
  <BrowserRouter>
    <CardProduct {...args} />
  </BrowserRouter>
);

export const CardOffers = TemplateCardProduct.bind({});
CardOffers.args = {
  type: "offers",
  visibleQuantity: true,
  visibleDiscountPrice: true,
};

export const CardSelling = TemplateCardProduct.bind({});
CardSelling.args = {
  type: "selling",
  visibleCounter: true,
};
