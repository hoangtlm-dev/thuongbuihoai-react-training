import React from "react";
import "./icon.css";

interface IconProps {
  iconName: string;
}

const Icon: React.FC<IconProps> = ({ iconName }) => {
  let className = "fa";
  if(className) {
    className += " fa-shop"
  }
  return (
    <i className={iconName} />
  );
};

export default Icon;
