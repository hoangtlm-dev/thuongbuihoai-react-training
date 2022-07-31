import React from "react";
import { MenuProps, MenuType } from "@common-types/menu";
import menuStyle from "./_menu.module.scss";

const Menu: React.FC<MenuProps> = ({ menuList }) => {
  const renderMenuList = (list: MenuType[]) => {
    return list?.map((item) => (
      <li className={menuStyle.menu__item} key={item.key}>
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
