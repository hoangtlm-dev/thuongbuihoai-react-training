import React, { memo } from "react";
import Icon from "../Icon/Icon";
import { IconProps, IconType } from "@common-types/iconLink";
import "./iconLink.css";

const IconLink: React.FC<IconProps> = memo(({ iconList }) => {
  const renderIconList = (list: IconType[]) => {
    return list.map((item) => (
      <a
        className="icon__item"
        key={item.key}
        title={item.title}
        href={item.url}
      >
        <Icon iconName={item.iconName} />
      </a>
    ));
  };
  return (
    <div data-testid="icon-link" className="icon__list">
      {renderIconList(iconList)}
    </div>
  );
});

export default IconLink;
