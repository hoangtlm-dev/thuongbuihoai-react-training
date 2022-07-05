import React from "react";
import { Link } from "react-router-dom";

interface LogoProps {
  src: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <Link data-testid="logo" to="/">
      <img className="logo" src={src} alt="This is logo" />
    </Link>
  );
};

export default Logo;
