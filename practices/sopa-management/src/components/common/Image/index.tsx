// Libs
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface ImageProps {
  url?: string;
  alt?: string;
  href?: string;
  width: number;
  height: number;
  className?: string;
  size?: string;
}

const Image = ({
  url = '',
  alt = '',
  href,
  height,
  width,
  className = '',
  size = ''
}: ImageProps) =>
  href ? (
    <Link data-testid='image-link' to={href} aria-label='link to home page'>
      <img className={className} src={url} alt={alt} width={width} height={height} sizes={size} />
    </Link>
  ) : (
    <img data-testid='image' className={className} src={url} alt={alt} />
  );

export default memo(Image);
