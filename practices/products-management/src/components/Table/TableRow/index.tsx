import React, { memo } from 'react';
import styles from './TableRow.module.css';
import TableCell from '../TableCell';
import Avatar from '../../Avatar';
import Text from '../../Text';
import Status from '../../Status';
import { ProductType } from '../../../types/product';

interface TableRowProps {
  className?: string;
  children?: React.ReactNode;
  data?: ProductType[];
}

const TableRow: React.FC<TableRowProps> = ({ className = '', data = [] }) => {
  return (
    <>
      {data.map(item => (
        <tr key={item.id} className={`${className} ${styles['row-content']}`}>
            <TableCell
              children={
                <>
                  <Avatar
                    type='secondary'
                    src={item.productImage.url}
                    alt={item.productImage.alt}
                    className={styles['cell-avatar']}
                  />
                  <Text text={item.product} />
                </>
              }
            />
            <TableCell children={<Status value={item.status} />} />
            <TableCell children={<Text text={item.type} />} />
            <TableCell
              children={<Status quantity={item.quantity} type='tertiary' />}
            />
            <TableCell
              children={
                <>
                  <Avatar
                    type='primary'
                    src={item.productImage.url}
                    alt={item.productImage.alt}
                    className={styles['cell-avatar']}
                  />
                  <Text text={item.brand} />
                </>
              }
            />
            <TableCell children={<Text text={item.price} />} />
            <TableCell children={<i className={styles['cell-icon-dots']}></i>}/>
        </tr>
      ))}
    </>
  );
};

export default memo(TableRow);
