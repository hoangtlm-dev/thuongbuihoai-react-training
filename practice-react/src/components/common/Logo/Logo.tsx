import React from "react";

interface LogoProps {
  src: string;
}

const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <img data-testid="logo" className="logo" src={src} alt="This is logo" />
  );
};

export default Logo;
