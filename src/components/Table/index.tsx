import React, { memo, useContext } from 'react';
import TableHead from './TableHead';
import TableRow from './TableRow';
import { COLUMNS_HEADER } from '../../constants/common';
import styles from './Table.module.css';
import { ProductContext } from '../../contexts/ProductContext';

interface TableProps {
  className?: string;
}

const Table: React.FC<TableProps> = ({ className = '' }) => {
  const { productList } = useContext(ProductContext);
  {(!productList) && <div>Loading...</div> }
  return (
    <table className={`${className} ${styles['table']}`}>
      <TableHead columns={COLUMNS_HEADER} />
      <tbody>
        <TableRow data={productList}/>
      </tbody>
    </table>
  );
};

export default memo(Table);
