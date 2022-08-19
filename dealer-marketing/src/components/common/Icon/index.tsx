import React, { memo, MouseEventHandler } from "react";
import styleIcon from "./icon.module.css";

export enum IconType {
  search = "search",
  letter = "letter",
  arrowRight = "arrow-right",
}

interface IconProps {
  iconName: IconType;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Icon: React.FC<IconProps> = ({ iconName, onClick = () => null }) => {
  return <i onClick={onClick} className={styleIcon[`icon-${iconName}`]} />;
};

export default memo(Icon);
