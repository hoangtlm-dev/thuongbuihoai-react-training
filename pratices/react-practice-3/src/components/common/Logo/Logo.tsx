import React, { memo } from "react";
import { Link } from "react-router-dom";
import "./logo.css";

interface LogoProps {
  src: string;
  alt?: string;
  productId?: string;
}

const Logo: React.FC<LogoProps> = memo(({ src, alt }) => {
  return (
    <Link data-testid="logo" to="/">
      <img className="logo" src={src} alt={alt} />
    </Link>
  );
});

export default Logo;
