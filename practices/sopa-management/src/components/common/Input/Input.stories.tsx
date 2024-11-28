// Libs
import type { Meta, StoryObj } from '@storybook/react';

// Components
import Input,
{
  InputTheme,
  InputType
} from '@common/Input';

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const InputDefault: Story = {
  args: {
    label: 'Email address',
    style: InputType.default
  }
};

export const InputInfo: Story = {
  args: {
    label: 'Email address',
    style: InputType.info,
    theme: InputTheme.info,
  }
};

export const InputError: Story = {
  args: {
    label: 'Email address',
    style: InputType.error,
    theme: InputTheme.error,
  }
};
