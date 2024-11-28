import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Constants
import { IMAGE } from '@constants/image';

// Components
import Card from '@components/Card';

const meta: Meta<typeof Card> = {
  component: Card,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Card>;

export const TextNormal: Story = {
  args: {
    name: 'Black shoes',
    color: 'Black',
    price: 145,
    href: '/',
    src: IMAGE.blackShoes,
    alt: IMAGE.altBlackShoes
  }
};
