import React, { memo, useMemo } from "react";
import { Link } from "react-router-dom";
import "./logo.css";

interface LogoProps {
  src: string;
  type?: string;
}

const Logo: React.FC<LogoProps> = memo(({ src, type="medium" }) => {
  const className = useMemo(() => {
    switch (type) {
      case "medium":
        return `logo-${type}`;
      case "large":
        return `logo-${type}`;
      default:
        return "logo";
    }
  }, [type]);

  return (
    <Link data-testid="logo" to="/">
      <img className={className} src={src} alt="This is logo" />
    </Link>
  );
});

export default Logo;
