import { memo } from 'react';
import { Link } from 'react-router-dom';

// Components
import {
  Image,
  Price,
  PriceType,
  Text,
  ThemeType
} from '@components/common';

// Styles
import './card.css';

interface CardProps {
  key?: string;
  name?: string;
  color?: string;
  price?: number;
  href: string;
  src: string;
  alt?: string;
}

const Card = ({
  name = '',
  color = '',
  price = 0,
  href,
  src,
  alt = ''
}: CardProps) => (
  <div data-testid='card' className='card'>
    <div className='card-item'>
      <div className='card-image'>
        <Image
          href={href}
          url={src}
          alt={alt}
          width={322}
          height={130}
          className='card-image-item'
        />
      </div>
      <div className='card-info'>
        <Link to={href} className='card-name' aria-label={name}>
          {name}
        </Link>
        <div className='card-description'>
          <Text text={color} type={ThemeType.highlightPrimary} />
          <Price value={price} type={PriceType.primary} />
        </div>
      </div>
    </div>
  </div>
);

export default memo(Card);
