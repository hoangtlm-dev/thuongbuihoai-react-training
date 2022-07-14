import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DataContextProps } from "@common-types/data";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/category";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { DataContext } from "@context/DataContext";
import CardProductList from "@components/CardProduct/CardProductList";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CardProductList",
  component: CardProductList,
} as ComponentMeta<typeof CardProductList>;

const value: DataContextProps = {
  searchValue: [],
  setSearchValue: () => {},
  categories: CATEGORY_MOCKING_LIST,
  setCategories: () => {},
  products: PRODUCT_MOCKING_LIST,
  setProducts: () => {},
};

const TemplateCardProductList: ComponentStory<typeof CardProductList> = (
  args
) => (
  <DataContext.Provider value={value}>
    <BrowserRouter>
      <CardProductList {...args} />
    </BrowserRouter>
  </DataContext.Provider>
);

export const CardOffers = TemplateCardProductList.bind({});
CardOffers.args = {
  type: "offers",
  visibleQuantity: true,
  visibleDiscountPrice: true,
  productList: PRODUCT_MOCKING_LIST,
};

export const CardSelling = TemplateCardProductList.bind({});
CardSelling.args = {
  type: "selling",
  visibleCounter: true,
  productList: PRODUCT_MOCKING_LIST,
};
