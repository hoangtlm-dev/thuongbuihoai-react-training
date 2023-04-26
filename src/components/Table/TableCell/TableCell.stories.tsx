import { ComponentStory, ComponentMeta } from '@storybook/react';
import TableCell from '.';
import Avatar from '../../Avatar';
import Text from '../../Text';
import { ASSETS } from '../../../constants/assets';
import styles from './TableCell.module.css'
import Status from '../../Status';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/TableCell',
  component: TableCell
} as ComponentMeta<typeof TableCell>;

const TemplateTableCell: ComponentStory<typeof TableCell> = args => (
  <TableCell {...args} />
);

export const TableCellPrimary = TemplateTableCell.bind({});
TableCellPrimary.args = {
  children: (
    <>
      <Avatar type='primary' src={ASSETS.IBM} className={styles['cell-avatar']} />
      <Text />
    </>
  ),
};

export const TableCellSecondary = TemplateTableCell.bind({});
TableCellSecondary.args = {
  children: (
    <>
      <Avatar type='secondary' src={ASSETS.IBM} className={styles['cell-avatar']} />
      <Text />
    </>
  ),
};

export const TableCellStatus = TemplateTableCell.bind({});
TableCellStatus.args = {
  children: (
    <Status value='Available' type='primary' />
  ),
};

export const TableCellText = TemplateTableCell.bind({});
TableCellText.args = {
  children: (
    <Text text='Bravo' />
  ),
};

export const TableCellQuantity = TemplateTableCell.bind({});
TableCellQuantity.args = {
  children: (
    <Status value='9771' type='tertiary' />
  ),
};

export const TableCellPrice = TemplateTableCell.bind({});
TableCellPrice.args = {
  children: (
    <Text text='$199.89' />
  ),
};
