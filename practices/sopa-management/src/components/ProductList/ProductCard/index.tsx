import { memo } from 'react';

// Components
import Card from '@components/Card';

// Interfaces
import { Product } from '@interfaces/product';

// Styles
import './productCard.css';

interface ProductCardProps {
  key?: number;
  data: Product[];
}

const ProductCard = ({
  data,
}: ProductCardProps) => (
  <div className='product-card' data-testid='product-card'>
    {data?.map((product) => (
      <Card
        key={product.id}
        href={`products/${product.id}`}
        src={product.image.url}
        name={product.name}
        color={product.color}
        price={product.price}
        alt={product.image.alt}
      />
    ))}
  </div>
);

export default memo(ProductCard);
