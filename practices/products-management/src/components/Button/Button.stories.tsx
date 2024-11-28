import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button, { ButtonType } from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const TemplateButton: ComponentStory<typeof Button> = args => (
  <Button {...args} onClick={action('onClick action')} />
);

export const Primary = TemplateButton.bind({});
Primary.args = {
  text: 'Edit',
  type: ButtonType.primary
};

export const Secondary = TemplateButton.bind({});
Secondary.args = {
  text: 'Delete',
  type: ButtonType.secondary
};

export const Tertiary = TemplateButton.bind({});
Tertiary.args = {
  text: 'Cancel',
  type: ButtonType.tertiary
};

export const Quaternary = TemplateButton.bind({});
Quaternary.args = {
  text: 'Delete',
  type: ButtonType.quaternary
};

export const Quinary = TemplateButton.bind({});
Quinary.args = {
  text: 'Confirm',
  type: ButtonType.quinary
};

export const ButtonDisable = TemplateButton.bind({});
ButtonDisable.args = {
  text: 'Disable',
  type: ButtonType.default,
  disable: true
};
