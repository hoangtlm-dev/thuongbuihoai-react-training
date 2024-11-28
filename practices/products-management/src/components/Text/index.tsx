import React, { memo } from 'react';
import styles from './Text.module.css';

export enum SizeType {
  default = '',
  normal = 'normal',
  large = 'large'
}

export enum ThemeType {
  default = '',
  primary = 'primary',
  secondary = 'secondary'
}

interface TextProps {
  size?: string;
  theme?: string;
  text?: string | number;
}

const Text: React.FC<TextProps> = ({
  text = 'Management',
  size = SizeType.default,
  theme = ThemeType.default
}) => {
  return (
    <p
      data-testid='text'
      className={styles[`${size ? `text-${size}` : `text-${theme}`}`]}
    >
      {text}
    </p>
  );
};

export default memo(Text);
