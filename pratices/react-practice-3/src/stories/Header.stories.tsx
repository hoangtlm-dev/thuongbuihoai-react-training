import { ComponentStory, ComponentMeta } from "@storybook/react";
import Header from "@components/common/Header/Header";
import { BrowserRouter } from "react-router-dom";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const TemplateHeader: ComponentStory<typeof Header> = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);

export const Default = TemplateHeader.bind({});
