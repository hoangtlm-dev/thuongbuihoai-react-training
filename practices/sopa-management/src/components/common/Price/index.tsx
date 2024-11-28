import { memo } from 'react';

// Styles
import './price.css';

export enum PriceType {
  default = '',
  primary = 'primary',
  secondary = 'secondary',
  tertiary = 'tertiary'
}

interface PriceProps {
  value?: number;
  type?: string;
  className?: string;
}

const Price = ({
  value = 0,
  type = PriceType.default,
  className = ''
}: PriceProps) => (
  <p data-testid='price' className={`${className} price-${type}`}>
    ${value}
  </p>
);

export default memo(Price);
