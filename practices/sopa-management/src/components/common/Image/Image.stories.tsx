import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

// Components
import Image from '@common/Image';

// Constants
import { IMAGE } from '@constants/image';

const meta: Meta<typeof Image> = {
  component: Image,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const WhiteLogo: Story = {
  args: {
    url: IMAGE.whiteLogo,
    alt: IMAGE.altLogo,
  }
};

export const BlackLogo: Story = {
  args: {
    url: IMAGE.blackLogo,
    alt: IMAGE.altLogo,
  }
};
