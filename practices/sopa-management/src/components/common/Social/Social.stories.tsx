import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Social from '@common/Social';

const meta: Meta<typeof Social> = {
  component: Social,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Social>;

export const SocialList: Story = {
  args: {}
};
