import React, { memo } from "react";
import { MenuProps, MenuType, MenuTypeProp } from "@common-types/menu";
import menuStyle from "./menu.module.css";

const Menu: React.FC<MenuProps> = ({ menuList, type = MenuTypeProp.dark }) => {
  const renderMenuList = (list: MenuType[]) => {
    return list?.map((item) => (
      <li className={menuStyle[`menu-item-${type}`]} key={item.key}>
        <a href={item.url}>{item.label}</a>
      </li>
    ));
  };

  return (
    <div className={menuStyle.menu}>
      <ul className={menuStyle["menu-list"]}>{renderMenuList(menuList)}</ul>
    </div>
  );
};

export default memo(Menu);
