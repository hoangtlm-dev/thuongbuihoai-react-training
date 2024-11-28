import { ComponentStory, ComponentMeta } from "@storybook/react";
import ScrollButton from "@components/common/Button/ScrollButton/ScrollButton";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/ScrollButton",
  component: ScrollButton,
} as ComponentMeta<typeof ScrollButton>;

const TemplateScrollButton: ComponentStory<typeof ScrollButton> = (args) => (
  <ScrollButton {...args} />
);

export const Default = TemplateScrollButton.bind({});
Default.args = {
  className: "btn__scroll",
  children: <i className="fa fa-arrow-alt-circle-up"></i>,
};
