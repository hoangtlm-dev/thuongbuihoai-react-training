import { memo } from 'react';
import './text.css';

export enum SizeType {
  default = '',
  normal = 'normal',
  regular = 'regular',
  extraRegular = 'extra-regular',
  medium = 'medium',
  extraMedium = 'extra-medium',
  large = 'large'
}

export enum ThemeType {
  default = '',
  light = 'light',
  dark = 'dark',
  highlightPrimary = 'highlight-primary',
  highlightSecondary = 'highlight-secondary'
}

interface TextProps {
  type?: string;
  text?: string;
  className?: string;
}

const Text = ({
  text = 'Sopa',
  type = SizeType.default,
  className = ''
}: TextProps) => (
  <p data-testid='text' className={`${className} text-${type}`}>
    {text}
  </p>
);

export default memo(Text);
