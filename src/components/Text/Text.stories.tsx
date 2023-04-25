import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text, { SizeType, ThemeType } from ".";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/Text",
  component: Text,
} as ComponentMeta<typeof Text>;

const TemplateText: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextNormal = TemplateText.bind({});
TextNormal.args = {
  text: "Management",
  size: SizeType.normal,
};

export const TextLarge = TemplateText.bind({});
TextLarge.args = {
  text: "Management",
  size: SizeType.large,
};

export const TextRegularDark = TemplateText.bind({});
TextRegularDark.args = {
  text: "Management",
  size: ThemeType.primary,
};
