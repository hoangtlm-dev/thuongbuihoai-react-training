import React, { memo } from 'react';
import styles from './TableHead.module.css';
import { ColumnHeader } from '../../../types/table';
import Dropdown from '../../Dropdown';
import Input from '../../Input';
import { STATUS, TYPE } from '../../../constants/common';

interface TableHeadProps {
  columns?: ColumnHeader[];
}

const TableHead: React.FC<TableHeadProps> = ({ columns = [] }) => {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.key}>
            {column === columns[1] || column === columns[2] ? (
              <div className={styles['th-value']}>
                {column.value}
                {column === columns[1] ? (
                  <Dropdown className={styles['th-status']} data={STATUS} />
                ) : (
                  <Dropdown className={styles['th-type']} data={TYPE} />
                )}
              </div>
            ) : column === columns[6] ? (
              column.value
            ) : (
              <div className={styles['th-value']}>
                {column.value}
                <Input
                  className={styles['th-search']}
                  placeholder='Search'
                  styleInput='primary'
                />
              </div>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default memo(TableHead);
