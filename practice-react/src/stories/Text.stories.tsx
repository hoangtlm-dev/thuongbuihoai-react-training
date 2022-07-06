import Text from "@components/common/Text/Text";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const TemplateText: ComponentStory<typeof Text> = (args) => (
    <Text {...args} />
);

export const TextBlur = TemplateText.bind({});
TextBlur.args = {
  text: "Lorem ipsum dolor sit",
  type: "blur"
};

export const TextLarge = TemplateText.bind({});
TextLarge.args = {
  text: "Offers",
  type: "large"
};

export const TextLargeDark = TemplateText.bind({});
TextLargeDark.args = {
  text: "Popular Products",
  type: "large-dark"
};