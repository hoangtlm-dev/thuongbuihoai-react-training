import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import CardProductList from "@components/CardProduct/CardProductList";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CardProductList",
  component: CardProductList,
} as ComponentMeta<typeof CardProductList>;

const TemplateCardProductList: ComponentStory<typeof CardProductList> = (args) => (
  <BrowserRouter>
    <CardProductList {...args} />
  </BrowserRouter>
);

export const CardOffers = TemplateCardProductList.bind({});
CardOffers.args = {
  type: "offers",
  visibleQuantity: true,
  visibleDiscountPrice: true,
};

export const CardSelling = TemplateCardProductList.bind({});
CardSelling.args = {
  type: "selling",
  visibleCounter: true,
};
