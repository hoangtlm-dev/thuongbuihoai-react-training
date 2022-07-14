import React from "react";
import Icon from "../Icon/Icon";
import { IconProps, IconType } from "@common-types/iconLink";
import "./iconLink.css";

const IconLink: React.FC<IconProps> = ({ iconList }) => {
  const renderIconList = (list: IconType[]) => {
    return list.map((item) => (
      <a className="icon__item" title={item.title} href={item.url}>
        <Icon iconName={item.iconName} />
      </a>
    ));
  };
  return <div className="icon__list">{renderIconList(iconList)}</div>;
};

export default IconLink;
