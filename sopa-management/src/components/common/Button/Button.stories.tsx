import type { Meta, StoryObj } from '@storybook/react';

// Components
import Button, { ButtonType } from '.';

// Images
import { Trash } from '../../../../public/images/icons';

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonPrimary: Story = {
  args: {
    children: 'Show more',
    type: ButtonType.primary
  }
};

export const ButtonSecondary: Story = {
  args: {
    children: 'Add to bag $15',
    type: ButtonType.secondary
  }
};

export const ButtonTertiary: Story = {
  args: {
    children: 'LOGIN',
    type: ButtonType.tertiary
  }
};

export const ButtonOutLinePrimary: Story = {
  args: {
    type: ButtonType.btnOutLinePrimary,
    children: 'Shoe Finder Quiz'
  }
};

export const ButtonOutLineSecondary: Story = {
  args: {
    type: ButtonType.btnOutLineSecondary,
    children: 'Enter email here for updates'
  }
};

export const ButtonIconPrimary: Story = {
  args: {
    type: ButtonType.btnIconPrimary,
    children: <Trash />
  }
};

export const ButtonIconSecondary: Story = {
  args: {
    type: ButtonType.btnIconSecondary,
    children: <Trash />
  }
};

export const ButtonDisable: Story = {
  args: {
    children: 'SHOW MORE',
    disable: true
  }
};
