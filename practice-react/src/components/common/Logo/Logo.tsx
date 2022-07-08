import React from "react";
import { Link } from "react-router-dom";
import "./logo.css";

interface LogoProps {
  src: string;
  type?: string;
}

const Logo: React.FC<LogoProps> = ({ src, type }) => {
  let className = "";
  switch (type) {
    case "medium":
      className = "logo--medium";
      break;
    case "large":
      className = "logo--large";
      break;
    default:
      break;
  }

  return (
    <Link data-testid="logo" to="/">
      <img className={className} src={src} alt="This is logo" />
    </Link>
  );
};

export default Logo;
