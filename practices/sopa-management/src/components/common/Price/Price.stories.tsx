import type { Meta, StoryObj } from '@storybook/react';

// Components
import Price,
{
  PriceType
} from '.';

const meta: Meta<typeof Price> = {
  component: Price,
};

export default meta;
type Story = StoryObj<typeof Price>;

export const Primary: Story = {
  args: {
    value: 145,
    type: PriceType.primary
  }
};

export const Secondary: Story = {
  args: {
    value: 145,
    type: PriceType.secondary
  }
};

export const Tertiary: Story = {
  args: {
    value: 145,
    type: PriceType.tertiary
  }
};
