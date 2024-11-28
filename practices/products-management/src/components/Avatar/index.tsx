import React, { memo } from 'react';
import styles from './Avatar.module.css';

export enum AvatarType {
  primary = 'primary',
  secondary = 'secondary'
}

interface AvatarProps {
  className?: string;
  type?: string;
  src: string;
  alt?: string;
}

const Avatar: React.FC<AvatarProps> = ({
  className = '',
  type = '',
  src = '',
  alt = ''
}) => {
  return (
    <img
      data-testid='avatar'
      className={`${className} ${styles[`avt-${type}`]}`}
      src={src}
      alt={alt}
    />
  );
};

export default memo(Avatar);
