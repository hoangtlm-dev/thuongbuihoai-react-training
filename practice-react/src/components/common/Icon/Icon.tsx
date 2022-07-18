import React, { memo, MouseEventHandler } from "react";
import "./icon.css";

interface IconProps {
  iconName: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Icon: React.FC<IconProps> = memo(({ iconName, onClick }) => {
  let className = "";
  switch (iconName) {
    case "filter":
      className = "icon-filter";
      break;
    case "plus":
      className = "icon-plus";
      break;
    case "minus":
      className = "icon-minus";
      break;
    case "cart":
      className = "icon-cart";
      break;
    case "fb":
      className = "icon-fb";
      break;
    case "twitter":
      className = "icon-twitter";
      break;
    case "instagram":
      className = "icon-instagram";
      break;
    default:
      break;
  }
  return <i data-testid="icon" onClick={onClick} className={className} />;
});

export default Icon;
