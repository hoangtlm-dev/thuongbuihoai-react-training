import React, { memo } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { COLUMNS_HEADER, TABLE } from '../../constants/common';
import styles from './Table.module.css';

interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className = '' }) => {
  return (
    <table className={`${className} ${styles['table']}`}>
      <TableHead columns={COLUMNS_HEADER} />
      <tbody>
        <TableRow data={TABLE} />
      </tbody>
    </table>
  );
};

export default memo(Table);
