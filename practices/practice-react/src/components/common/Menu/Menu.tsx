import React, { memo } from "react";
import { Link } from "react-router-dom";
import { MenuProps, MenuType } from "@common-types/menu";
import "./menu.css";

const Menu: React.FC<MenuProps> = memo(({ menuList }) => {
  const renderMenuList = (list: MenuType[]) => {
    return list.map((item) => (
      <li className="menu-item" key={item.key}>
        <a href={item.url}>{item.label}</a>
      </li>
    ));
  };

  return (
    <div data-testid="menu" className="menu">
      <ul className="menu-list">
        <li data-testid="menu-item" className="menu-item">
          <Link to="/products">Shop</Link>
        </li>
        {renderMenuList(menuList)}
      </ul>
    </div>
  );
});

export default Menu;
