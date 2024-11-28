import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from '.';
import { STATUS } from '../../constants/common';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

const TemplateDropdown: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />;

export const DropdownAvailable = TemplateDropdown.bind({});
DropdownAvailable.args = {
  data: STATUS,
};
