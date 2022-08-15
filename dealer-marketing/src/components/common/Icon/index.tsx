import React, { memo, MouseEventHandler } from "react";
import styleIcon from "./icon.module.css";

export enum IconType {
  search = "icon-search",
  letter = "icon-letter",
  arrowRight = "icon-arrow-right",
}

interface IconProps {
  iconName: IconType;
  onClick?: MouseEventHandler<HTMLElement>;
}

const Icon: React.FC<IconProps> = ({
  iconName = IconType.search,
  onClick = () => {},
}) => {
  return <i onClick={onClick} className={styleIcon[iconName]} />;
};

export default memo(Icon);
