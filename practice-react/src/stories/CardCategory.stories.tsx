import CategoryCard from "@components/CategoryCard/CategoryCard";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CATEGORY } from "@__mocks__/constants/category";
import { BrowserRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CategoryCard",
  component: CategoryCard,
} as ComponentMeta<typeof CategoryCard>;

const TemplateCategoryCard: ComponentStory<typeof CategoryCard> = (args) => (
  <BrowserRouter>
    <CategoryCard {...args} />
  </BrowserRouter>
);

export const Primary = TemplateCategoryCard.bind({});
Primary.args = {
  category: CATEGORY,
};
