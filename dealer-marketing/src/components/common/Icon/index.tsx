import React, { MouseEventHandler } from "react";
import styleIcon from "./icon.module.css";

interface IconProps {
  iconName: string;
  onClick?: MouseEventHandler<HTMLElement>;
}

const classNameType = {
  search: "icon-search",
  letter: "icon-letter",
  arrowRight: "icon-arrow-right",
};

const Icon: React.FC<IconProps> = ({ iconName = "letter", onClick }) => {
  const className = classNameType[iconName as keyof typeof classNameType] || "";

  return <i onClick={onClick} className={styleIcon[className]} />;
};

export default Icon;
