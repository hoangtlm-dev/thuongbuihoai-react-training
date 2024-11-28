import { ComponentStory, ComponentMeta } from "@storybook/react";
import InputSearch from "@components/Input/InputSearch/InputSearch";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/InputSearch",
  component: InputSearch,
} as ComponentMeta<typeof InputSearch>;

const TemplateInputSearch: ComponentStory<typeof InputSearch> = () => (
  <InputSearch />
);
export const Default = TemplateInputSearch.bind({});
