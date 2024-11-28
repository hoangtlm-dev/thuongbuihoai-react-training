import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableHead from '.';
import { COLUMNS_HEADER } from '../../../constants/common';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/TableHead',
  component: TableHead
} as ComponentMeta<typeof TableHead>;

const TemplateTableHead: ComponentStory<typeof TableHead> = args => <TableHead {...args} />;

export const TableHeadNormal = TemplateTableHead.bind({});
TableHeadNormal.args = {
  columns: COLUMNS_HEADER
};
