import { ComponentStory, ComponentMeta } from "@storybook/react";
import { TextType } from "@components/common/Text";
import { Text } from "@components/common";

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
  text: "Dealer Marketing",
  size: TextType.normal,
};

export const TextRegular = TemplateText.bind({});
TextRegular.args = {
  text: "Dealer Marketing",
  size: TextType.regular,
};

export const TextRegularDark = TemplateText.bind({});
TextRegularDark.args = {
  text: "Dealer Marketing",
  size: TextType.regularDark,
};

export const TextRegularOutline = TemplateText.bind({});
TextRegularOutline.args = {
  text: "Dealer Marketing",
  size: TextType.regularOutline,
};

export const TextMedium = TemplateText.bind({});
TextMedium.args = {
  text: "Dealer Marketing",
  size: TextType.medium,
};

export const TextMediumOutline = TemplateText.bind({});
TextMediumOutline.args = {
  text: "Dealer Marketing",
  size: TextType.mediumOutline,
};

export const TextLarge = TemplateText.bind({});
TextLarge.args = {
  text: "Dealer Marketing",
  size: TextType.large,
};

export const TextLargeDark = TemplateText.bind({});
TextLargeDark.args = {
  text: "Dealer Marketing",
  size: TextType.largeDark,
};
