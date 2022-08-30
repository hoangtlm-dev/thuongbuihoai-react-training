import Link from "next/link";
import React, { memo } from "react";
import { MenuProps, MenuType, MenuTypeProp } from "@common-types/menu";
import menuStyle from "./menu.module.css";

const Menu: React.FC<MenuProps> = ({ menuList, type = MenuTypeProp.dark }) => {
  const renderMenuList = (list: MenuType[]) => {
    return list?.map((item) => (
      <li className={menuStyle[`menu-item-${type}`]} key={item.key}>
        <Link href={item.url}>{item.label}</Link>
      </li>
    ));
  };

  return <ul className={menuStyle["menu-list"]}>{renderMenuList(menuList)}</ul>;
};

export default memo(Menu);
