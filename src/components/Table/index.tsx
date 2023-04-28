import React, { memo } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { COLUMNS_HEADER, TABLE } from '../../constants/common';
import styles from './Table.module.css';
import useSWR from 'swr';
import { PRODUCT_URL } from '../../constants/url';
import { getData } from '../../helpers/apiHandle';
import { TableType } from '../../types/table';

interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className = '' }) => {
  // fetch data with useSWR
  const { data } = useSWR(PRODUCT_URL, getData<TableType[]>);
  console.log('data', data);
  

  return (
    <table className={`${className} ${styles['table']}`}>
      <TableHead columns={COLUMNS_HEADER} />
      <tbody>
        <TableRow data={data} />
      </tbody>
    </table>
  );
};

export default memo(Table);
