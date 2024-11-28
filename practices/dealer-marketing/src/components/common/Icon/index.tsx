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

const Icon: React.FC<IconProps> = ({ iconName, onClick = () => {} }) => (
  <i
    data-testid="icon"
    className={styleIcon[`icon-${iconName}`]}
    onClick={onClick}
  />
);

export default memo(Icon);
