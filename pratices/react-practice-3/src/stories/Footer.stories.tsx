import Footer from "@components/common/Footer/Footer";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: "Component/Footer",
  component: Footer,
} as ComponentMeta<typeof Footer>;

const TemplateFooter: ComponentStory<typeof Footer> = (args) => <Footer {...args} />
export const Default = TemplateFooter.bind({});