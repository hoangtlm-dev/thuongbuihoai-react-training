import { ComponentStory, ComponentMeta } from '@storybook/react';
import Status, { StatusType } from '.';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Status',
  component: Status
} as ComponentMeta<typeof Status>;

const TemplateStatus: ComponentStory<typeof Status> = args => <Status {...args} />;

export const StatusAvailable = TemplateStatus.bind({});
StatusAvailable.args = {
  value: "Available",
  type: StatusType.primary
};

export const StatusSoldOut = TemplateStatus.bind({});
StatusSoldOut.args = {
  value: "Sold out",
  type: StatusType.secondary
};

export const StatusQuantity = TemplateStatus.bind({});
StatusQuantity.args = {
  value: "9177",
  type: StatusType.tertiary
};
