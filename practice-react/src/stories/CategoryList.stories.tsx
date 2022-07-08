import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import { CATEGORY_LIST } from "@constants/category";
import CategoryList from "@components/Category/CategoryList/CategoryList";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CategoryList",
  component: CategoryList,
} as ComponentMeta<typeof CategoryList>;

const TemplateCategoryList: ComponentStory<typeof CategoryList> = (args) => (
  <BrowserRouter>
    <CategoryList {...args} />
  </BrowserRouter>
);
export const Select = TemplateCategoryList.bind({});
Select.args = {
  categoryList: CATEGORY_LIST,
  isSelect: true,
  type: "select"
};

export const Checkbox = TemplateCategoryList.bind({});
Checkbox.args = {
  categoryList: CATEGORY_LIST,
  isCheckbox: true,
  type: "checkbox"
};
