import React, { memo } from 'react';
import { StatusTypes } from '../../types/Status';

interface DropdownProps {
  className?: string;
  data?: StatusTypes[];
}

const Dropdown: React.FC<DropdownProps> = ({className = '', data = []}) => {
  return (
    <select name="" id="" className={className}>
      {data.map((item) => (
        <option value="">{item.value}</option>
      ))}
    </select>
  );
};

export default memo(Dropdown);
