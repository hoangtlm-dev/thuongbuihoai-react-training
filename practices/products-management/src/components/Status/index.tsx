import React, { memo } from 'react';
import styles from './Status.module.css';

export enum StatusType {
  default = '',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary'
}

interface StatusLabel {
  value?: boolean;
  quantity?: number;
  type?: string;
  className?: string;
}

const Status: React.FC<StatusLabel> = ({
  type = StatusType.default,
  value = '',
  quantity = 0,
  className = ''
}) => {
  return (
    <div
      data-testid='status'
      className={`${className} ${styles[`status-${type}`]} 
      ${
        quantity
          ? styles[`status-${type}`]
          : value
          ? styles['status-primary']
          : styles['status-secondary']
      }`}
    >
      {quantity ? quantity : `${value ? 'Available' : 'Sold out'}`}
    </div>
  );
};

export default memo(Status);
