import React, { memo } from 'react';
import { StatusTypes } from '../../types/status';
import styles from './Dropdown.module.css';

interface DropdownProps {
  className?: string;
  options?: StatusTypes[];
  selectOption?: string;
  onClick?: (value?: any) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  className = '',
  options = [],
  selectOption = '',
  onClick = () => {}
}) => {
  console.log('onClick', onClick);
  
  return (
    <div data-testid='dropdown' className={styles['select-dropdown']}>
      <select
        name=''
        id=''
        className={`${className} ${styles['select-option']}`}
      >
        {options.map(option => (
          <option value={option.value} onClick={() => onClick(option)}>
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Dropdown);
