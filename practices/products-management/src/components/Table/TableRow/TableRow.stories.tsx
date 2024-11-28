import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableRow from '.';
import { TABLE } from '../../../constants/common';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/TableRow',
  component: TableRow
} as ComponentMeta<typeof TableRow>;

const TemplateTableRow: ComponentStory<typeof TableRow> = args => <TableRow {...args} />;

export const TableRowNormal = TemplateTableRow.bind({});
TableRowNormal.args = {
  data: TABLE
};
