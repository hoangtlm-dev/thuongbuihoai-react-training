import type { Meta, StoryObj } from '@storybook/react';

// Components
import Text,
{
  SizeType,
  ThemeType
} from '@common/Text';

const meta: Meta<typeof Text> = {
  component: Text
};

export default meta;
type Story = StoryObj<typeof Text>;

export const TextNormal: Story = {
  args: {
    text: 'Sopa management',
    type: SizeType.normal
  }
};

export const TextRegular: Story = {
  args: {
    text: 'Sopa management',
    type: SizeType.regular
  }
};

export const TextMedium: Story = {
  args: {
    text: 'Sopa management',
    type: SizeType.medium
  }
};

export const TextExtraMedium: Story = {
  args: {
    text: 'Sopa management',
    type: SizeType.extraMedium
  }
};

export const TextLarge: Story = {
  args: {
    text: 'Sopa management',
    type: SizeType.large
  }
};

export const TextHighLightPrimary: Story = {
  args: {
    text: 'Sopa management',
    type: ThemeType.highlightPrimary
  }
};

export const TextHightLightSecondary: Story = {
  args: {
    text: 'Sopa management',
    type: ThemeType.highlightSecondary
  }
};

export const TextDark: Story = {
  args: {
    text: 'Sopa management',
    type: ThemeType.dark
  }
};
