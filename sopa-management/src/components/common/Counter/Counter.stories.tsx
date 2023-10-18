// Libs
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Counter from '.';

const meta: Meta<typeof Counter> = {
  component: Counter,
};

export default meta;
type Story = StoryObj<typeof Counter>;

export const CounterDefault: Story = {
  args: {}
};
