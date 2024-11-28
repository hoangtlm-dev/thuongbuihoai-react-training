import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Table',
  component: Table
} as ComponentMeta<typeof Table>;

const TemplateTable: ComponentStory<typeof Table> = args => <Table {...args} />;

export const TableNormal = TemplateTable.bind({});
TableNormal.args = {
};
