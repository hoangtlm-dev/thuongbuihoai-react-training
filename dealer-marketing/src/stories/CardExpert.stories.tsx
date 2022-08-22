import { ComponentStory, ComponentMeta } from "@storybook/react";
import { EXPERT_MOCKING } from "@constants/expert";
import { CardExpert } from "@components";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Component/CardExpert",
  component: CardExpert,
} as ComponentMeta<typeof CardExpert>;

const TemplateCardExpert: ComponentStory<typeof CardExpert> = (args) => (
  <CardExpert {...args} />
);

export const CardExpertRegular = TemplateCardExpert.bind({});
CardExpertRegular.args = {
  expert: EXPERT_MOCKING,
};
