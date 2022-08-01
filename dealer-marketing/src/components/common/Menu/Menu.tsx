import React, { useMemo } from "react";
import { MenuProps, MenuType } from "@common-types/menu";
import menuStyle from "./menu.module.css";

const Menu: React.FC<MenuProps> = ({ menuList, type }) => {
  const className = useMemo(() => {
    switch (type) {
      case "light":
        return "menu__item--light";
      case "dark":
        return "menu__item--dark";
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
      <ul className={menuStyle.menu__list}>{renderMenuList(menuList)}</ul>
    </div>
  );
};

export default Menu;
