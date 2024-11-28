import React, { ChangeEventHandler, memo } from 'react';
import { StatusTypes } from '../../types/status';
import styles from './Dropdown.module.css';

interface DropdownProps {
  className?: string;
  options?: StatusTypes[];
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

const Dropdown: React.FC<DropdownProps> = ({
  className = '',
  options = [],
  onChange = () => {}
}) => {

  return (
    <div data-testid='dropdown' className={styles['select-dropdown']}>
      <select
        className={`${className} ${styles['select-option']}`}
        onChange={onChange}
      >
        {options.map(option => (
          <option key={option.id} value={option.key?.toString()}>{option.value}</option>
        ))}
      </select>
    </div>
  );
};

export default memo(Dropdown);
