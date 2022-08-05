import React, { useMemo } from "react";
import { MenuProps, MenuType } from "@common-types/menu";
import menuStyle from "./menu.module.css";

const Menu: React.FC<MenuProps> = ({ menuList, type }) => {
  const className = useMemo(() => {
    switch (type) {
      case "light":
        return "menu-item-light";
      case "dark":
        return "menu-item-dark";
      case "normal":
        return "menu-item-normal";
      default:
        return "";
    }
  }, [type]);

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
