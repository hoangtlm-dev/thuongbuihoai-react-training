import { BrowserRouter } from "react-router-dom";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { DataContextProps } from "@common-types/data";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/category";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { DataContext } from "@context/DataContext";
import ProductList from "@components/ProductList/ProductList";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/ProductList",
  component: ProductList,
} as ComponentMeta<typeof ProductList>;

const value: DataContextProps = {
  searchValue: [],
  setSearchValue: () => {},
  categories: CATEGORY_MOCKING_LIST,
  setCategories: () => {},
  products: PRODUCT_MOCKING_LIST,
  setProducts: () => {},
};

const TemplateProductList: ComponentStory<typeof ProductList> = (
  args
) => (
  <DataContext.Provider value={value}>
    <BrowserRouter>
      <ProductList {...args} />
    </BrowserRouter>
  </DataContext.Provider>
);

export const CardOffers = TemplateProductList.bind({});
CardOffers.args = {
  type: "offers",
  visibleQuantity: true,
  visibleDiscountPrice: true,
  productList: PRODUCT_MOCKING_LIST,
};

export const CardSelling = TemplateProductList.bind({});
CardSelling.args = {
  type: "selling",
  visibleCounter: true,
  productList: PRODUCT_MOCKING_LIST,
};
