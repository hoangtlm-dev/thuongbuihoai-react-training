import React, { memo, MouseEventHandler } from 'react';
import './icon.css';

export enum IconType {
  close = 'close',
  esquire = 'esquire',
  vogua = 'vogua',
  human = 'human',
  facebook = 'facebook',
  instagram = 'instagram',
  twitter = 'twitter',
  bag = 'bag',
  user = 'user',
  trash = 'trash',
  star = 'star'
}

interface IconProps {
  iconName?: IconType;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Icon: React.FC<IconProps> = ({
  iconName,
  className,
  onClick = () => {}
}) => (
  <div
    data-testid='icon'
    className={`${className} icon-${iconName}`}
    onClick={onClick}
  />
);

export default memo(Icon);