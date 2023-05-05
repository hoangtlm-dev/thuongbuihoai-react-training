import React, { memo, useContext } from 'react';
import styles from './TableHead.module.css';
import { ColumnHeader } from '../../../types/table';
import Dropdown from '../../Dropdown';
import Input from '../../Input';
import { STATUS, TYPE } from '../../../constants/common';
import { ProductContext } from '../../../contexts/ProductContext';

interface TableHeadProps {
  columns?: ColumnHeader[];
}

const TableHead: React.FC<TableHeadProps> = ({ columns = [] }) => {
  const { searchValue, handleSearch } = useContext(ProductContext);

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
                  key={column.key}
                  value={searchValue[column.key]}
                  className={styles['th-search']}
                  placeholder='Search'
                  styleInput='primary'
                  onChange={(e) => handleSearch((column.key as string), e.target.value)}
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
