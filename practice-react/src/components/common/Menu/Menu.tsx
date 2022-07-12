import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { MenuProps, MenuType } from "@common-types/menu";
import { DataContext } from "@context/DataContext";
import "./menu.css";

const Menu: React.FC<MenuProps> = memo(({ menuList }) => {
  const { setSearchValue } = useContext(DataContext);
  const handleDefaultCategory = () => {
    const categoryId = "";
    setSearchValue?.(categoryId);
  };
  const renderMenuList = (list: MenuType[]) => {
    return list.map((item) => (
      <li className="menu__item" key={item.key}>
        <a href="">{item.label}</a>
      </li>
    ));
  }

  return (
    <div data-testid="menu" className="menu">
      <ul className="menu__list">
        <li data-testid="menu-item" className="menu__item">
          <Link onClick={handleDefaultCategory} to="/products">Shop</Link>
        </li>
        {renderMenuList(menuList)}
      </ul>
    </div>
  );
});

export default Menu;
