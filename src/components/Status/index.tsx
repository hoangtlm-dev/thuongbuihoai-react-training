import React, { memo } from 'react';
import styles from './Status.module.css';

export enum StatusType {
  default = '',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary'
}

interface StatusLabel {
  value?: string;
  type?: string;
  className?: string;
}

const Status: React.FC<StatusLabel> = ({
  type = StatusType.default,
  value = '',
  className = '',
}) => {
  return (
    <div data-testid='status' className={`${className} ${styles[`status-${type}`]}`}>
      {value}
    </div>
  );
};

export default memo(Status);
