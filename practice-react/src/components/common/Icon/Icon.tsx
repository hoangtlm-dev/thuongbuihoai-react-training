import React from "react";
import "./icon.css";

interface IconProps {
  iconName: string;
}

const Icon: React.FC<IconProps> = ({ iconName }) => {
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
  return <i className={className} />;
};

export default Icon;
