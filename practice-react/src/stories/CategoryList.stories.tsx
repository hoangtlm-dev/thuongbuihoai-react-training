import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { DataContextProps } from "@common-types/data";
import { CATEGORY_MOCKING_LIST } from "@__mocks__/constants/category";
import { PRODUCT_MOCKING_LIST } from "@__mocks__/constants/product";
import { DataContext } from "@context/DataContext";
import CategoryList from "@components/Category/CategoryList/CategoryList";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CategoryList",
  component: CategoryList,
} as ComponentMeta<typeof CategoryList>;

const value: DataContextProps = {
  searchValue: {},
  setSearchValue: () => {},
  categories: CATEGORY_MOCKING_LIST,
  setCategories: () => {},
  products: PRODUCT_MOCKING_LIST,
  setProducts: () => {},
};

const TemplateCategoryList: ComponentStory<typeof CategoryList> = (args) => (
  <DataContext.Provider value={value}>
    <BrowserRouter>
      <CategoryList {...args} />
    </BrowserRouter>
  </DataContext.Provider>
);
export const Select = TemplateCategoryList.bind({});
Select.args = {
  isSelect: true,
  type: "select",
};

export const Checkbox = TemplateCategoryList.bind({});
Checkbox.args = {
  isCheckbox: true,
  type: "checkbox",
};
