import CategoryCheck from "@components/CategoryCheck/CategoryCheck";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CategoryCheck",
  component: CategoryCheck,
} as ComponentMeta<typeof CategoryCheck>;

const TemplateCategoryCheck: ComponentStory<typeof CategoryCheck> = (args) => (
  <CategoryCheck {...args} />
);

export const Default = TemplateCategoryCheck.bind({});
Default.args = {
  text: "Beverages"
}