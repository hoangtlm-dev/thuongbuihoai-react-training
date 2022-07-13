import CardCategory from "@components/Category/CardCategory/CardCategory";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CATEGORY } from "@__mocks__/constants/category";
import { BrowserRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CardCategory",
  component: CardCategory,
} as ComponentMeta<typeof CardCategory>;

const TemplateCardCategory: ComponentStory<typeof CardCategory> = (args) => (
  <BrowserRouter>
    <CardCategory {...args} />
  </BrowserRouter>
);

export const Primary = TemplateCardCategory.bind({});
Primary.args = {
  category: CATEGORY,
};
