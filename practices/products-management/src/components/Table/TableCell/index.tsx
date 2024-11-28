import React, { memo } from 'react';
import styles from './TableCell.module.css';

interface TableCellProps {
  className?: string;
  children?: React.ReactNode;
}

const TableCell: React.FC<TableCellProps> = ({
  className = '',
  children
}) => {
  return (
    <td className={className}>
      <div className={styles[`cell-content`]}>{children}</div>
    </td>
  );
};

export default memo(TableCell);
