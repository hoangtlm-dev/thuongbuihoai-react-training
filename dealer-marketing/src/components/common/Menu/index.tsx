import React from "react";
import { MenuProps, MenuType } from "@common-types/menu";
import menuStyle from "./menu.module.css";

const classNameType = {
  light: "menu-item-light",
  dark: "menu-item-dark",
  normal: "menu-item-normal",
};

const Menu: React.FC<MenuProps> = ({ menuList, type = "menu-item-light" }) => {
  const className = classNameType[type as keyof typeof classNameType] || "";

  const renderMenuList = (list: MenuType[]) => {
    return list?.map((item) => (
      <li className={menuStyle[className]} key={item.key}>
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

export default Menu;
