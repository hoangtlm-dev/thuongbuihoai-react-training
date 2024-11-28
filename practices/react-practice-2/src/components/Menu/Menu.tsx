import React, { memo } from "react";
import { MenuProps, MenuType } from "@/types/menu";
import "./menu.css";

const Menu: React.FC<MenuProps> = ({ menuList }) => {
  function renderMenuList(list: MenuType[]) {
    return list.map((item) =>
      <li className="menu__item" key={item.key}>
        <a href="">{item.label}</a>
      </li>
    );
  }

  return (
    <div className="menu">
      <ul className="menu__list">{renderMenuList(menuList)}</ul>
    </div>
  );
}

export default memo(Menu);
