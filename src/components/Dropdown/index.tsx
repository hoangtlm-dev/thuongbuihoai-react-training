import React, { memo } from 'react';
import { StatusTypes } from '../../types/status';
import styles from './Dropdown.module.css'

interface DropdownProps {
  className?: string;
  data?: StatusTypes[];
}

const Dropdown: React.FC<DropdownProps> = ({className = '', data = []}) => {
  return (
   <div data-testid='dropdown' className={styles['select-dropdown']}>
     <select name="" id="" className={`${className} ${styles['select-option']}`}>
      {data.map((item) => (
        <option value="">{item.value}</option>
      ))}
    </select>
   </div>
  );
};

export default memo(Dropdown);
