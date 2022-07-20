import React, { memo } from "react";
import { IconProps, IconType } from "@common-types/iconLink";
import Icon from "../Icon/Icon";
import "./iconLink.css";

const IconLink: React.FC<IconProps> = memo(({ iconList }) => {
  const renderIconList = (list: IconType[]) => {
    return list.map((item) => (
      <a
        className="icon-item"
        key={item.key}
        title={item.title}
        href={item.url}
      >
        <Icon iconName={item.iconName} />
      </a>
    ));
  };
  return (
    <div data-testid="icon-link" className="icon-list">
      {renderIconList(iconList)}
    </div>
  );
});

export default IconLink;
