import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input, { InputType } from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const TemplateInput: ComponentStory<typeof Input> = args => <Input {...args} />;

export const InputPrimary = TemplateInput.bind({});
InputPrimary.args = {
  placeholder: 'Search',
  styleInput: InputType.primary
};

export const InputSecondary = TemplateInput.bind({});
InputSecondary.args = {
  placeholder: 'Search',
  styleInput: InputType.secondary
};